from mcr.microsoft.com/dotnet/sdk:6.0 as build

workdir /app

copy /*.csproj ./

run dotnet restore

copy . ./

run dotnet publish -c Release -o publish

from mcr.microsoft.com/dotnet/aspnet:6.0 as runtime

workdir /app

copy --from=build /app/publish ./

env ASPNETCORE_URLS=http://+:$PORT

cmd ["dotnet", "api.dll"]