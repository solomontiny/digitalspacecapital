import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import CookiePreferenceCenter from "@/components/CookiePreferenceCenter";
import { Helmet } from "react-helmet";
import SEO from "@/components/SEO";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO title="Terms of Service" description="Terms and conditions governing the use of Digital Space Capital Group's website and services." />

      <Helmet>
        <title>Terms of Service | Digital Space Capital</title>
        <meta name="description" content="Read Digital Space Capital's terms of service governing the use of our website and financial services." />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground text-center mb-4">
            Terms of Service
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
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using the Digital Space Capital Group website and services, you agree to be bound by these 
                Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, 
                you are prohibited from using or accessing this site. The materials contained in this website are 
                protected by applicable copyright and trademark law.
              </p>
            </div>

            {/* Definitions */}
            <div className="bg-card rounded-xl p-8 shadow-sm border">
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Definitions</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li><strong>"Company," "we," "us," or "our"</strong> refers to Digital Space Capital Group and its subsidiaries</li>
                <li><strong>"Services"</strong> refers to all financial products, platforms, and services offered by the Company</li>
                <li><strong>"User," "you," or "your"</strong> refers to any individual or entity accessing our website or using our services</li>
                <li><strong>"Website"</strong> refers to digitalspacecapital.com and all associated web properties</li>
                <li><strong>"Content"</strong> refers to all text, images, data, information, and materials on our website</li>
              </ul>
            </div>

            {/* Financial Services */}
            <div className="bg-primary/5 rounded-xl p-8 shadow-sm border border-primary/20">
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Financial Services Terms</h2>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">3.1 General Financial Disclaimer</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The information provided on this website does not constitute financial, investment, legal, or tax advice. 
                All investments involve risk, including the potential loss of principal. Past performance is not indicative 
                of future results. You should consult with a qualified financial advisor before making any investment decisions.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">3.2 Regulatory Compliance</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Digital Space Capital Group and its subsidiaries operate in compliance with all applicable Nigerian 
                financial regulations, including but not limited to regulations set forth by:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                <li>Securities and Exchange Commission (SEC) Nigeria</li>
                <li>Central Bank of Nigeria (CBN)</li>
                <li>National Insurance Commission (NAICOM)</li>
                <li>Corporate Affairs Commission (CAC)</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">3.3 Investment Risks</h3>
              <p className="text-muted-foreground leading-relaxed">
                You acknowledge and accept that investing in financial products carries inherent risks. The value of 
                investments can go down as well as up, and you may receive back less than your original investment. 
                We do not guarantee any specific investment outcomes.
              </p>
            </div>

            {/* Use License */}
            <div className="bg-card rounded-xl p-8 shadow-sm border">
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Use License</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Permission is granted to temporarily access the materials on our website for personal, non-commercial 
                transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or public display</li>
                <li>Attempt to decompile or reverse engineer any software on our website</li>
                <li>Remove any copyright or proprietary notations from the materials</li>
                <li>Transfer the materials to another person or mirror the materials on any other server</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                This license shall automatically terminate if you violate any of these restrictions and may be 
                terminated by Digital Space Capital at any time.
              </p>
            </div>

            {/* Account Terms */}
            <div className="bg-card rounded-xl p-8 shadow-sm border">
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Account Terms</h2>
              
              <h3 className="text-xl font-semibold text-foreground mt-4 mb-3">5.1 Account Registration</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To access certain services, you may be required to create an account. You agree to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                <li>Provide accurate, current, and complete information during registration</li>
                <li>Maintain and promptly update your account information</li>
                <li>Maintain the security and confidentiality of your login credentials</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">5.2 Know Your Customer (KYC)</h3>
              <p className="text-muted-foreground leading-relaxed">
                In compliance with Nigerian financial regulations, you may be required to provide identification 
                documents and undergo verification procedures before accessing certain financial services. Failure 
                to complete KYC requirements may result in limited access to our services.
              </p>
            </div>

            {/* Prohibited Activities */}
            <div className="bg-card rounded-xl p-8 shadow-sm border">
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Prohibited Activities</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You agree not to engage in any of the following prohibited activities:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Using our services for any illegal purpose or in violation of any laws</li>
                <li>Money laundering, terrorist financing, or other financial crimes</li>
                <li>Fraud, misrepresentation, or deceptive practices</li>
                <li>Circumventing security measures or attempting unauthorized access</li>
                <li>Interfering with or disrupting our services or servers</li>
                <li>Impersonating another person or entity</li>
                <li>Collecting personal information of other users without consent</li>
                <li>Using automated systems to access our services without permission</li>
              </ul>
            </div>

            {/* Fees and Payments */}
            <div className="bg-card rounded-xl p-8 shadow-sm border">
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Fees and Payments</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Certain services may require payment of fees. You agree to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Pay all applicable fees as described for the services you use</li>
                <li>Provide valid and current payment information</li>
                <li>Authorize us to charge your payment method for all fees due</li>
                <li>Be responsible for all taxes associated with your use of our services</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Fee schedules and payment terms for specific services will be provided separately at the time of 
                service enrollment.
              </p>
            </div>

            {/* Intellectual Property */}
            <div className="bg-card rounded-xl p-8 shadow-sm border">
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content, features, and functionality on our website, including but not limited to text, graphics, 
                logos, icons, images, audio clips, digital downloads, and software, are the exclusive property of 
                Digital Space Capital Group or its licensors and are protected by Nigerian and international 
                copyright, trademark, and other intellectual property laws.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="bg-card rounded-xl p-8 shadow-sm border">
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                In no event shall Digital Space Capital Group, its directors, employees, partners, agents, suppliers, 
                or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, 
                including without limitation:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Loss of profits, data, use, goodwill, or other intangible losses</li>
                <li>Investment losses resulting from market fluctuations</li>
                <li>Unauthorized access to or alteration of your transmissions or data</li>
                <li>Statements or conduct of any third party on our services</li>
                <li>Any other matter relating to our services</li>
              </ul>
            </div>

            {/* Indemnification */}
            <div className="bg-card rounded-xl p-8 shadow-sm border">
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Indemnification</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to indemnify, defend, and hold harmless Digital Space Capital Group and its officers, 
                directors, employees, agents, and successors from and against any claims, liabilities, damages, 
                losses, and expenses, including reasonable legal fees, arising out of or in any way connected 
                with your access to or use of our services, your violation of these Terms, or your violation 
                of any third-party rights.
              </p>
            </div>

            {/* Governing Law */}
            <div className="bg-card rounded-xl p-8 shadow-sm border">
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Governing Law and Jurisdiction</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the Federal Republic 
                of Nigeria, without regard to its conflict of law provisions. Any disputes arising under or in 
                connection with these Terms shall be subject to the exclusive jurisdiction of the courts of Nigeria, 
                specifically the courts located in Lagos State.
              </p>
            </div>

            {/* Termination */}
            <div className="bg-card rounded-xl p-8 shadow-sm border">
              <h2 className="text-2xl font-bold text-foreground mb-4">12. Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may terminate or suspend your access to our services immediately, without prior notice or liability, 
                for any reason whatsoever, including without limitation if you breach these Terms. Upon termination, 
                your right to use our services will cease immediately. All provisions of these Terms which by their 
                nature should survive termination shall survive termination.
              </p>
            </div>

            {/* Changes to Terms */}
            <div className="bg-card rounded-xl p-8 shadow-sm border">
              <h2 className="text-2xl font-bold text-foreground mb-4">13. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify or replace these Terms at any time at our sole discretion. If a revision 
                is material, we will provide at least 30 days notice prior to any new terms taking effect. What 
                constitutes a material change will be determined at our sole discretion. By continuing to access or 
                use our services after any revisions become effective, you agree to be bound by the revised terms.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-card rounded-xl p-8 shadow-sm border">
              <h2 className="text-2xl font-bold text-foreground mb-4">14. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                <p className="text-foreground"><strong>Digital Space Capital Group</strong></p>
                <p className="text-muted-foreground">5a Adekunle Lawal Street, off Oba Adeyinka Oyekan Road</p>
                <p className="text-muted-foreground">Ikoyi, Lagos, Nigeria</p>
                <p className="text-muted-foreground">Email: legal@digitalspacecapital.com</p>
                <p className="text-muted-foreground">Phone: +234 9131059419</p>
              </div>
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

export default TermsOfService;
