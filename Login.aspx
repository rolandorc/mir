<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="MIR.Login" %>

<!DOCTYPE html>

<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="img/favicon.png">

    <title>Login</title>

    <link href="Content/login/bootstrap.min.css" rel="stylesheet">
    <link href="Content/login/signin.css?v=1.0" rel="stylesheet">
  </head>

  <body class="text-center">
    <form role="form" class="form-signin">
    <div id="content" class="col-sm-4" style="position: absolute; top: 8px; right: 16px;">
    </div>
      <img class="mb-3" src="img/escudoGrande.png" alt="" width="100%" style="margin-top: -15px;">
      <h1 class="h3 mb-3 font-weight-normal">Iniciar Sesión</h1>
      <label class="sr-only">Usuario</label>
      <input id="txtUsuario" type="text" class="form-control" placeholder="Usuario" name="txtUsuario" required autofocus="">

      <label class="sr-only">Contraseña</label>
      <input id="txtContraseña" type="password" class="form-control" placeholder="Contraseña" name="txtContraseña" required>

      <button type="submit" id="btnEntrar" class="btn btn-lg btn-secondary btn-login btn-block">Iniciar sesión</button>
      <p class="mt-5 mb-3 text-muted">H. Ayuntamiento de Apizaco 2017-2021</p>
    </form>

    <script src="Scripts/jquery-2.1.1.js"></script>
    <script src="Scripts/jquery.validate.min.js"></script>
    <script src="Scripts/messageProcessing.js"></script>
    <script src="Scripts/AjaxRequest.js"></script>
    <script src="Scripts/ScriptForm/Login.js?v=1.0"></script>
    
</body></html>
