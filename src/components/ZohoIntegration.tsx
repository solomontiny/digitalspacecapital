import { useEffect } from "react";

// ============================================
// ZOHO CONFIGURATION
// ============================================
// Replace these with your actual Zoho credentials:
// 
// 1. Get SalesIQ Widget Code:
//    - Go to https://www.zoho.com/salesiq/
//    - Settings → Brands → Installation
//    - Copy your widget code (looks like: siq1234567890abcdef...)
//
// 2. Get Zoho Desk Key:
//    - Go to https://www.zoho.com/desk/
//    - Setup → Channels → Web Widget
//    - Copy your snippet key
//
const ZOHO_SALESIQ_WIDGET_CODE = "YOUR_SALESIQ_WIDGET_CODE_HERE"; // Replace this
const ZOHO_DESK_KEY = "YOUR_DESK_KEY_HERE"; // Replace this

const ZohoIntegration = () => {
  useEffect(() => {
    // Only load if valid credentials are provided
    if (!ZOHO_SALESIQ_WIDGET_CODE || ZOHO_SALESIQ_WIDGET_CODE === "YOUR_SALESIQ_WIDGET_CODE_HERE") {
      console.warn("⚠️ Zoho SalesIQ widget code not configured. Please add your widget code in src/components/ZohoIntegration.tsx");
      return;
    }

    // Zoho SalesIQ Integration for Digital Space Capital
    const salesIQScript = document.createElement("script");
    salesIQScript.type = "text/javascript";
    salesIQScript.innerHTML = `
      var $zoho=$zoho || {};
      $zoho.salesiq = $zoho.salesiq || {
        widgetcode: "${ZOHO_SALESIQ_WIDGET_CODE}",
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

    let deskScript: HTMLScriptElement | null = null;
    let deskWidgetScript: HTMLScriptElement | null = null;

    // Zoho Desk Integration (Optional - only if you have Zoho Desk)
    if (ZOHO_DESK_KEY && ZOHO_DESK_KEY !== "YOUR_DESK_KEY_HERE") {
      deskScript = document.createElement("script");
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

      deskWidgetScript = document.createElement("script");
      deskWidgetScript.id = "ze-snippet";
      deskWidgetScript.src = `https://static.zdassets.com/ekr/snippet.js?key=${ZOHO_DESK_KEY}`;
      deskWidgetScript.async = true;
      document.head.appendChild(deskWidgetScript);
    }

    return () => {
      // Cleanup scripts on unmount
      if (salesIQScript.parentNode) {
        salesIQScript.parentNode.removeChild(salesIQScript);
      }
      if (deskScript?.parentNode) {
        deskScript.parentNode.removeChild(deskScript);
      }
      if (deskWidgetScript?.parentNode) {
        deskWidgetScript.parentNode.removeChild(deskWidgetScript);
      }
    };
  }, []);

  return null;
};

export default ZohoIntegration;
