global using BL;
global using Model;
using DL;
using Microsoft.EntityFrameworkCore;
using Npgsql;

var builder = WebApplication.CreateBuilder(args);

//Setting CORS
builder.Services.AddCors(
    options => {
        options.AddDefaultPolicy(origin => {
            origin//.WithOrigins("http://stephenpagdilao.com", "http://localhost:4200")
                .AllowAnyHeader()
                .AllowAnyMethod()
                .AllowAnyOrigin();
        });
    }
);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//Setting db connection environment
//Comment this on deployment
// Environment.SetEnvironmentVariable("DATABASE_URL", builder.Configuration.GetConnectionString("Reference2DB"), EnvironmentVariableTarget.Process);

//Setting up PostgreSQL connection
URIParser urlParser = new URIParser(Environment.GetEnvironmentVariable("DATABASE_URL"));
var postgreConnectionString = new NpgsqlConnectionStringBuilder()
{
    Host = urlParser.Host,
    Port = urlParser.Port,
    Username = urlParser.Username,
    Password = urlParser.Password,
    Database = urlParser.Database
};

builder.Services.AddDbContext<AppDBContext>(options => options.UseNpgsql(postgreConnectionString.ToString()));
builder.Services.AddScoped<IRepository<RSVP>,SqlRSVP>();
builder.Services.AddScoped<IRepository<Guest>, SqlGuest>();
builder.Services.AddScoped<IRSVPBL, RSVPBL>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
