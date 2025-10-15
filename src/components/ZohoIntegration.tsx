import { useEffect } from "react";

const ZohoIntegration = () => {
  useEffect(() => {
    // Zoho SalesIQ Integration for Digital Space Capital
    const salesIQScript = document.createElement("script");
    salesIQScript.type = "text/javascript";
    salesIQScript.innerHTML = `
      var $zoho=$zoho || {};
      $zoho.salesiq = $zoho.salesiq || {
        widgetcode: "siqe8a44c3e8a88f4e157cdbd86a0a5b4e8d4b4c0e1e0e8a9c1a5e0e8e8e8e8e8e",
        values:{
          "Company Name": "Digital Space Capital",
          "Industry": "Financial Services"
        },
        ready:function(){
          $zoho.salesiq.floatbutton.visible("show");
        }
      };
      var d=document;
      s=d.createElement("script");
      s.type="text/javascript";
      s.id="zsiqscript";
      s.defer=true;
      s.src="https://salesiq.zoho.com/widget";
      t=d.getElementsByTagName("script")[0];
      t.parentNode.insertBefore(s,t);
    `;
    document.head.appendChild(salesIQScript);

    // Zoho Desk Integration for Digital Space Capital
    const deskScript = document.createElement("script");
    deskScript.type = "text/javascript";
    deskScript.innerHTML = `
      window.zESettings = {
        webWidget: {
          chat: {
            departments: {
              enabled: ['Support', 'Sales', 'Investment Services']
            },
            title: {
              '*': 'Digital Space Capital Support'
            },
            prechatForm: {
              greeting: {
                '*': 'Welcome to Digital Space Capital! How can we help you today?'
              }
            }
          },
          contactForm: {
            title: {
              '*': 'Contact Digital Space Capital'
            }
          }
        }
      };
    `;
    document.head.appendChild(deskScript);

    const deskWidgetScript = document.createElement("script");
    deskWidgetScript.id = "ze-snippet";
    deskWidgetScript.src = "https://static.zdassets.com/ekr/snippet.js?key=digitalspacecapital_zoho_desk";
    deskWidgetScript.async = true;
    document.head.appendChild(deskWidgetScript);

    return () => {
      // Cleanup scripts on unmount
      if (salesIQScript.parentNode) {
        salesIQScript.parentNode.removeChild(salesIQScript);
      }
      if (deskScript.parentNode) {
        deskScript.parentNode.removeChild(deskScript);
      }
      if (deskWidgetScript.parentNode) {
        deskWidgetScript.parentNode.removeChild(deskWidgetScript);
      }
    };
  }, []);

  return null;
};

export default ZohoIntegration;
