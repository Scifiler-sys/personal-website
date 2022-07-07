namespace BL
{
    public class URIParser
    {
        private string _uri;

        public URIParser(string p_uri)
        {
            _uri = p_uri;

            var URI = Uri.TryCreate(_uri, UriKind.Absolute, out var uri);

            this.Host = uri.Host;
            this.Port = uri.Port;
            this.Database = uri.LocalPath.Substring(1);
            this.Username = uri.UserInfo.Split(':')[0];
            this.Password = uri.UserInfo.Split(':')[1];
        }

        public string Host { get; set; }
        public int Port { get; set; }
        public string Database { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }

        public override string ToString()
        {
            return $"Host:{Host}\nPort: {Port}\nDatabase:{Database}\nUsername:{Username}\nPassword:{Password}";
        }
    }
}
