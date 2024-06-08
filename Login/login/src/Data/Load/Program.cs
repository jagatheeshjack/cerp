using System;
using System.Data.SqlClient;
using System.Text.Json;

namespace FetchDataApp
{
    class Program
    {
        static Timer _timer;

        static void Main(string[] args)
        {
            _timer = new Timer(ExecuteTask, null, TimeSpan.Zero, TimeSpan.FromMinutes(1));
            Console.WriteLine("Press [Enter] to exit the program.");
            Console.ReadLine(); // Prevents the application from exiting
        }

        static void ExecuteTask(object state)
        {
            // Define your connection string
        string connectionString = "Server=JAGATHEESH\\CHITTU;Database=Bikestores;User Id=sa;Password=Jack@15122000;";

        // Define your query
        string query = "SELECT store_id, store_name, phone, email, street, city, state, zip_code FROM [sales].[stores]";

            // Define your output file path
            string filePath = "info.json";

            try
            {
                // Create a list to hold the data
                var results = new List<Dictionary<string, object>>();

                // Create a new SqlConnection
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    // Create a new SqlCommand
                    SqlCommand command = new SqlCommand(query, connection);

                    // Open the connection
                    connection.Open();

                    // Execute the command and retrieve the data
                    using (SqlDataReader reader = command.ExecuteReader())
                    {
                        // Fetch the data
                        while (reader.Read())
                        {
                            var row = new Dictionary<string, object>
                            {
                                { "store_id", reader["store_id"] },
                                { "store_name", reader["store_name"] },
                                { "phone", reader["phone"] },
                                { "email", reader["email"] },
                                { "street", reader["street"] },
                                { "city", reader["city"] },
                                { "state", reader["state"] },
                                { "zip_code", reader["zip_code"] }
                            };
                            results.Add(row);
                        }
                    }
                }

                // Serialize the data to JSON and write it to the file
                var jsonOptions = new JsonSerializerOptions { WriteIndented = true };
                string jsonString = JsonSerializer.Serialize(results, jsonOptions);
                File.WriteAllText(filePath, jsonString);

                Console.WriteLine("Data has been written to the file successfully.");
            }
            catch (Exception ex)
            {
                Console.WriteLine("An error occurred: " + ex.Message);
            }
        }
    }
}
