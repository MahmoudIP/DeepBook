<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="SingUp.aspx.cs" Inherits="DeepBook.SingUp" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Singup</title>
    <linl rel="stylesheet" href="CSS/normalize.css" />
    <link rel="stylesheet" href="CSS/Singup.css" />
    <style>
        
    </style>
</head>
<body>
    <header>
  <div class="contanier">
    <div>
      <h1><span >D</span>eep<span>B</span>ook</h1>
    </div>
  </div>
</header>
    <div class="contanier">
    <form id="Singup" runat="server">
        <div>
            
            <span class="si">Sing Up</span>
<br />

<!-- user name --> 
<asp:TextBox  ID="userName"  placeholder="User Name" runat="server" CssClass="input"   ></asp:TextBox>
<br />

<!-- Phone Number --> 
<asp:TextBox  ID="numPhone" placeholder="09---.---.---" runat="server" CssClass="input"  ></asp:TextBox>
<br />  


<!-- Password--> 
<asp:TextBox type="password" ID="password1" placeholder="Password" runat="server" CssClass="input"   ></asp:TextBox>
<br />  
            <div class="mes hid">errpr message </div>
           

<!-- Confirm Password--> 
<asp:TextBox type="password"  ID="password2" placeholder="Confirm Password" runat="server"   CssClass="input" OnTextChanged="check_Password"></asp:TextBox>
<br />

<!-- Button Sing Up--> 
<asp:Button  CssClass="butLog" ID="sing_up" runat="server"  Text="Sing Up"  OnClick="check_Password" />

<!-- Button Resert  --> 
<asp:Button  CssClass="rest" ID="reset" runat="server" Text="Reset" BackColor="Red"  />
<br />
            <br />
<asp:HyperLink ID="HyperLink1" CssClass="login" runat="server" NavigateUrl="~/LogIn.aspx">You Have Account ?</asp:HyperLink>
<br />
            <br />

        </div>
    </form>
    </div>
    <script src="JS/SingUp.js" > </script>
    
</body>
</html>
