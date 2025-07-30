{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  # The build inputs, i.e. tools that you want to have in your shell
  buildInputs = [
    pkgs.nodejs
  ];

  # The hook is a script that will be executed every time you enter the shell
  shellHook = ''
    # Set the environment variable for the backend API URL
    export REACT_APP_API_URL="your_heroku_backend_url_goes_here"
  '';

  # The scripts that you want to be able to run from the shell
  scripts = {
    preview = {
      command = "npm start";
      description = "Starts the development server";
    };
  };
}
