import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import CookiePreferenceCenter from "@/components/CookiePreferenceCenter";
import { Helmet } from "react-helmet";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Privacy Policy | Digital Space Capital</title>
        <meta name="description" content="Learn about Digital Space Capital's privacy practices, cookie usage, and how we protect your personal information." />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground text-center mb-4">
            Privacy Policy
          </h1>
          <p className="text-primary-foreground/80 text-center max-w-2xl mx-auto">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-8">
            
            {/* Introduction */}
            <div className="bg-card rounded-xl p-8 shadow-sm border">
              <h2 className="text-2xl font-bold text-foreground mb-4">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Digital Space Capital Group ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you visit our website and use our services. Please read this privacy policy carefully. 
                If you do not agree with the terms of this privacy policy, please do not access the site.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="bg-card rounded-xl p-8 shadow-sm border">
              <h2 className="text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Personal Information</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Register for our services or create an account</li>
                <li>Subscribe to our newsletter</li>
                <li>Fill out a contact form or inquiry</li>
                <li>Apply for career opportunities</li>
                <li>Use our financial services products</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                This information may include your name, email address, phone number, postal address, 
                and other information you choose to provide.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Automatically Collected Information</h3>
              <p className="text-muted-foreground leading-relaxed">
                When you access our website, we automatically collect certain information about your device, 
                including information about your web browser, IP address, time zone, and some of the cookies 
                that are installed on your device.
              </p>
            </div>

            {/* Cookie Policy */}
            <div className="bg-primary/5 rounded-xl p-8 shadow-sm border border-primary/20">
              <h2 className="text-2xl font-bold text-foreground mb-4">Cookie Policy</h2>
              
              <h3 className="text-xl font-semibold text-foreground mt-4 mb-3">What Are Cookies?</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Cookies are small text files that are placed on your computer or mobile device when you 
                visit a website. They are widely used to make websites work more efficiently and to 
                provide information to the owners of the site.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Types of Cookies We Use</h3>
              
              <div className="space-y-4 mt-4">
                <div className="bg-background rounded-lg p-4 border">
                  <h4 className="font-semibold text-foreground mb-2">Essential Cookies</h4>
                  <p className="text-muted-foreground text-sm">
                    These cookies are necessary for the website to function properly. They enable basic 
                    functions like page navigation, secure area access, and remembering your cookie consent preferences. 
                    The website cannot function properly without these cookies.
                  </p>
                </div>

                <div className="bg-background rounded-lg p-4 border">
                  <h4 className="font-semibold text-foreground mb-2">Analytics Cookies</h4>
                  <p className="text-muted-foreground text-sm">
                    These cookies help us understand how visitors interact with our website by collecting 
                    and reporting information anonymously. This helps us improve our website and services. 
                    We may use third-party analytics services such as Google Analytics.
                  </p>
                </div>

                <div className="bg-background rounded-lg p-4 border">
                  <h4 className="font-semibold text-foreground mb-2">Functional Cookies</h4>
                  <p className="text-muted-foreground text-sm">
                    These cookies enable enhanced functionality and personalization, such as remembering 
                    your preferences, language settings, and login information. They may be set by us or 
                    by third-party providers whose services we use.
                  </p>
                </div>

                <div className="bg-background rounded-lg p-4 border">
                  <h4 className="font-semibold text-foreground mb-2">Marketing Cookies</h4>
                  <p className="text-muted-foreground text-sm">
                    These cookies are used to track visitors across websites. The intention is to display 
                    ads that are relevant and engaging for the individual user. They are usually placed 
                    by advertising networks with our permission.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Managing Your Cookie Preferences</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You can manage your cookie preferences at any time by clicking the "Manage Cookies" link 
                in our website footer. You can also control cookies through your browser settings:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Chrome: Settings → Privacy and security → Cookies</li>
                <li>Firefox: Options → Privacy & Security → Cookies</li>
                <li>Safari: Preferences → Privacy → Cookies</li>
                <li>Edge: Settings → Privacy, search, and services → Cookies</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4 text-sm">
                Please note that disabling certain cookies may affect the functionality of our website.
              </p>
            </div>

            {/* How We Use Your Information */}
            <div className="bg-card rounded-xl p-8 shadow-sm border">
              <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use the information we collect in various ways, including to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Provide, operate, and maintain our website and services</li>
                <li>Improve, personalize, and expand our services</li>
                <li>Understand and analyze how you use our website</li>
                <li>Develop new products, services, features, and functionality</li>
                <li>Communicate with you for customer service, updates, and marketing</li>
                <li>Process transactions and send related information</li>
                <li>Send you newsletters and promotional communications (with your consent)</li>
                <li>Find and prevent fraud and security issues</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            {/* Data Sharing */}
            <div className="bg-card rounded-xl p-8 shadow-sm border">
              <h2 className="text-2xl font-bold text-foreground mb-4">Information Sharing and Disclosure</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may share your information in the following situations:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li><strong>With Service Providers:</strong> We may share your information with third-party vendors who perform services on our behalf</li>
                <li><strong>Within Our Group:</strong> We may share information with our subsidiaries and affiliates</li>
                <li><strong>For Legal Purposes:</strong> We may disclose information when required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In connection with any merger, acquisition, or sale of assets</li>
                <li><strong>With Your Consent:</strong> We may share your information for any other purpose with your consent</li>
              </ul>
            </div>

            {/* Data Security */}
            <div className="bg-card rounded-xl p-8 shadow-sm border">
              <h2 className="text-2xl font-bold text-foreground mb-4">Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your 
                personal information against unauthorized access, alteration, disclosure, or destruction. 
                However, please note that no method of transmission over the Internet or electronic storage 
                is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            {/* Your Rights */}
            <div className="bg-card rounded-xl p-8 shadow-sm border">
              <h2 className="text-2xl font-bold text-foreground mb-4">Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>The right to access your personal information</li>
                <li>The right to correct inaccurate or incomplete information</li>
                <li>The right to delete your personal information</li>
                <li>The right to restrict or object to processing</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                To exercise any of these rights, please contact us using the information provided below.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-card rounded-xl p-8 shadow-sm border">
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                <p className="text-foreground"><strong>Digital Space Capital Group</strong></p>
                <p className="text-muted-foreground">5a Adekunle Lawal Street, off Oba Adeyinka Oyekan Road</p>
                <p className="text-muted-foreground">Ikoyi, Lagos, Nigeria</p>
                <p className="text-muted-foreground">Email: info@digitalspacecapital.com</p>
                <p className="text-muted-foreground">Phone: +234 9131059419</p>
              </div>
            </div>

            {/* Updates */}
            <div className="bg-card rounded-xl p-8 shadow-sm border">
              <h2 className="text-2xl font-bold text-foreground mb-4">Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes 
                by posting the new Privacy Policy on this page and updating the "Last updated" date. 
                You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
      <CookieConsent />
      <CookiePreferenceCenter />
    </div>
  );
};

export default PrivacyPolicy;
