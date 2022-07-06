from mcr.microsoft.com/dotnet/sdk:6.0 as build

workdir /app

copy *.sln ./
copy API/*.csproj API/
copy Model/*.csproj Model/

run dotnet restore

copy . ./

run dotnet publish -c Release -o publish

from mcr.microsoft.com/dotnet/aspnet:6.0 as runtime

workdir /app

copy --from=build /app/publish ./

# cmd ["dotnet", "API.dll"]

CMD ASPNETCORE_URLS=http://*:$PORT dotnet API.dll