import { useEffect } from "react";

const ZohoIntegration = () => {
  useEffect(() => {
    // Zoho SalesIQ Integration
    const salesIQScript = document.createElement("script");
    salesIQScript.type = "text/javascript";
    salesIQScript.innerHTML = `
      var $zoho=$zoho || {};
      $zoho.salesiq = $zoho.salesiq || {
        widgetcode: "YOUR_SALESIQ_WIDGET_CODE",
        values:{},
        ready:function(){}
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

    // Zoho Desk Integration
    const deskScript = document.createElement("script");
    deskScript.type = "text/javascript";
    deskScript.innerHTML = `
      window.zESettings = {
        webWidget: {
          chat: {
            departments: {
              enabled: ['Support']
            }
          }
        }
      };
    `;
    document.head.appendChild(deskScript);

    const deskWidgetScript = document.createElement("script");
    deskWidgetScript.id = "ze-snippet";
    deskWidgetScript.src = "https://static.zdassets.com/ekr/snippet.js?key=YOUR_ZOHO_DESK_KEY";
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
