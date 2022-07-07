using System;
using BL;
using Xunit;


namespace unitTests
{
    public class URIParserTests
    {
        [Fact]
        public void URIParserShouldParseHeroku()
        {
            string uriString = "postgres://dmsauagvaahrdz:aacee80b17da06a336c1db06a88778ce57195e24c5cad8cbd7d88fb1335f6d86@ec2-54-204-56-171.compute-1.amazonaws.com:5432/d15teevmvda4fa";
            Environment.SetEnvironmentVariable("DATABASE_URL", uriString, EnvironmentVariableTarget.Process);
            
            string uriStringEnv = Environment.GetEnvironmentVariable("DATABASE_URL");
            
            string expectedHost = "ec2-54-204-56-171.compute-1.amazonaws.com";
            string expectedDatabase = "d15teevmvda4fa";
            string expectedUser = "dmsauagvaahrdz";
            string expectedPass = "aacee80b17da06a336c1db06a88778ce57195e24c5cad8cbd7d88fb1335f6d86";
            int expectedPort = 5432;
            
            URIParser uriParser = new URIParser(uriStringEnv);

            Assert.Equal(expectedHost, uriParser.Host);
            Assert.Equal(expectedDatabase, uriParser.Database);
            Assert.Equal(expectedUser, uriParser.Username);
            Assert.Equal(expectedPass, uriParser.Password);
            Assert.Equal(expectedPort, uriParser.Port);



        }
    }

}
