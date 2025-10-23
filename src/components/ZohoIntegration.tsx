import { useEffect } from "react";

// Zoho SalesIQ Widget Configuration
const ZOHO_SALESIQ_WIDGET_CODE = "siqbd92bdf5df7b68cbaad546cd2ac0d24baf31e1ac4c52b6a65a62f92d069bb20b";

const ZohoIntegration = () => {
  useEffect(() => {
    // Initialize Zoho SalesIQ
    const initScript = document.createElement("script");
    initScript.type = "text/javascript";
    initScript.innerHTML = `
      window.$zoho = window.$zoho || {};
      $zoho.salesiq = $zoho.salesiq || {
        ready: function() {
          console.log("Zoho SalesIQ loaded successfully");
        }
      };
    `;
    document.head.appendChild(initScript);

    // Load Zoho SalesIQ Widget
    const widgetScript = document.createElement("script");
    widgetScript.id = "zsiqscript";
    widgetScript.src = `https://salesiq.zohopublic.com/widget?wc=${ZOHO_SALESIQ_WIDGET_CODE}`;
    widgetScript.defer = true;
    document.head.appendChild(widgetScript);

    return () => {
      // Cleanup scripts on unmount
      if (initScript.parentNode) {
        initScript.parentNode.removeChild(initScript);
      }
      if (widgetScript.parentNode) {
        widgetScript.parentNode.removeChild(widgetScript);
      }
    };
  }, []);

  return null;
};

export default ZohoIntegration;
