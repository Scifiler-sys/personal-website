from mcr.microsoft.com/dotnet/sdk:6.0 as build

workdir /app

copy *.sln ./
copy API/*.csproj API/
copy BL/*.csproj BL/
copy DL/*.csproj DL/
copy Model/*.csproj Model/
copy unitTests/*.csproj unitTests/

run dotnet restore

copy . ./

run dotnet publish -c Release -o publish

from mcr.microsoft.com/dotnet/aspnet:6.0 as runtime

workdir /app

copy --from=build /app/publish ./

# cmd ["dotnet", "API.dll"]

CMD ASPNETCORE_URLS=http://*:$PORT dotnet API.dll