using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace DeepBook
{
    public partial class SingUp : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }
        protected void check_Password(object sender, EventArgs e)
        {
            var p1 = password1;
            var p2 = password2;

            if (p1.Text == null || p1.Text != p2.Text)
            {

                p2.Text = null;
                p1.Text = null;
                p1.Focus();
            }
            else
            {
                Response.Redirect("index.aspx");
            }

        }

    }
}