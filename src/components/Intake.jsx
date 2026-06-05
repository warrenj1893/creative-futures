import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { jsPDF } from 'jspdf';
import './Intake.css';

const Intake = () => {
  const [status, setStatus] = useState('');
  const [formData, setFormData] = useState({
    consent: false,
    legalName: '',
    entityType: '',
    yearEstablished: '',
    stage: '',
    ceoFirstName: '',
    ceoLastName: '',
    ceoEmail: '',
    contactFirstName: '',
    contactLastName: '',
    contactEmail: '',
    country: 'United States',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    website: '',
    identity: [],
    disciplines: [],
    assistance: [],
    challenge: '',
    engagement: '',
    referral: [],
    startDate: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox' && name !== 'consent') {
      const currentArray = formData[name];
      if (checked) {
        setFormData({ ...formData, [name]: [...currentArray, value] });
      } else {
        setFormData({ ...formData, [name]: currentArray.filter(item => item !== value) });
      }
    } else if (type === 'checkbox' && name === 'consent') {
      setFormData({ ...formData, consent: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.consent) {
       alert("You must consent to participate to proceed.");
       return;
    }
    setStatus('Submitting...');
    
    // Generate PDF
    const doc = new jsPDF();
    
    let y = 50;
    
    // Helper to handle dynamic page breaks
    const checkPageBreak = (neededHeight) => {
      if (y + neededHeight > 270) {
        doc.addPage();
        
        // Draw minimal clean header on subsequent pages
        doc.setFillColor(40, 42, 58); // Navy (#282a3a)
        doc.rect(0, 0, 210, 15, 'F');
        
        doc.setFillColor(243, 189, 79); // Gold (#f3bd4f)
        doc.rect(0, 15, 210, 1, 'F');
        
        // Render minimal footer on subsequent pages
        doc.setFont("helvetica", "bold");
        doc.setFontSize(8);
        doc.setTextColor(150, 150, 150);
        doc.text("CREATIVE FUTURES MKE - INTAKE RECORD", 20, 288);
        doc.text(`Page ${doc.internal.getNumberOfPages()}`, 180, 288);
        
        y = 28;
      }
    };

    // Draw main premium header block on the first page
    doc.setFillColor(40, 42, 58); // Navy (#282a3a)
    doc.rect(0, 0, 210, 40, 'F');
    
    // Accent Gold Line underneath the main banner
    doc.setFillColor(243, 189, 79); // Gold (#f3bd4f)
    doc.rect(0, 40, 210, 1.5, 'F');

    // Title text inside banner
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.text("CREATIVE FUTURES", 20, 18);
    
    // Subtitle
    doc.setTextColor(243, 189, 79); // Gold
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.text("OFFICIAL CLIENT PROGRAM INTAKE RECORD", 20, 26);
    
    // Date & Meta
    doc.setTextColor(200, 200, 200);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.text(`SUBMITTED: ${new Date().toLocaleDateString()}`, 145, 26);

    // Primary Page Footer
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    doc.text("POWERED BY CULTURE X DESIGN  |  WWW.CREATIVEFUTURESMKE.COM", 20, 288);
    doc.text(`Page ${doc.internal.getNumberOfPages()}`, 180, 288);

    // Helper to draw clean section block dividers
    const drawSectionHeader = (title) => {
      checkPageBreak(22);
      
      // Draw subtle background block for section headers
      doc.setFillColor(240, 163, 76); // Orange (#f0a34c)
      doc.rect(20, y, 170, 7.5, 'F');
      
      doc.setTextColor(40, 42, 58); // Navy text
      doc.setFont("helvetica", "bold");
      doc.setFontSize(9.5);
      doc.text(title.toUpperCase(), 25, y + 5);
      
      y += 13;
    };

    // Helper to draw beautifully aligned key-value rows
    const addField = (label, value) => {
      const valString = String(value || 'N/A');
      const labelWidth = 55;
      const valueWidth = 115;
      
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9.5);
      const splitValue = doc.splitTextToSize(valString, valueWidth);
      const rowHeight = (splitValue.length * 4.5) + 2.5;
      
      checkPageBreak(rowHeight);
      
      // Label in Navy bold
      doc.setTextColor(40, 42, 58);
      doc.setFont("helvetica", "bold");
      doc.text(label, 20, y);
      
      // Value in regular dark grey
      doc.setTextColor(60, 60, 60);
      doc.setFont("helvetica", "normal");
      doc.text(splitValue, 20 + labelWidth, y);
      
      y += rowHeight;
    };

    // --- RENDER SECTION: BUSINESS DETAILS ---
    drawSectionHeader("Business Profile");
    addField("Legal Entity Name", formData.legalName);
    addField("Legal Entity Type", formData.entityType);
    addField("Year Established", formData.yearEstablished);
    addField("Business Stage", formData.stage);
    addField("Website / Domain", formData.website);
    y += 4;

    // --- RENDER SECTION: LEADERSHIP & CONTACT ---
    drawSectionHeader("Leadership & Primary Contact");
    addField("CEO / Lead Creative", `${formData.ceoFirstName} ${formData.ceoLastName}`);
    addField("CEO Email Address", formData.ceoEmail);
    if (formData.contactFirstName || formData.contactEmail) {
      addField("Primary Contact Name", `${formData.contactFirstName} ${formData.contactLastName}`);
      addField("Primary Contact Email", formData.contactEmail);
    }
    addField("Street Address", `${formData.address1} ${formData.address2 || ''}`);
    addField("City, State, ZIP", `${formData.city}, ${formData.state} ${formData.zip}`);
    y += 4;

    // --- RENDER SECTION: IDENTITY & DISCIPLINE ---
    drawSectionHeader("Demographics & Practice");
    addField("Identities Owned", formData.identity.join(', ') || 'None selected');
    addField("Creative Disciplines", formData.disciplines.join(', ') || 'None selected');
    y += 4;

    // --- RENDER SECTION: STRATEGIC INTAKE FUNNEL ---
    drawSectionHeader("Assistance & Engagement");
    addField("Assistance Seeking", formData.assistance.join(', ') || 'None selected');
    addField("Key Growth Challenge", formData.challenge);
    addField("Prior Engagement", formData.engagement);
    addField("Referral Channel", formData.referral.join(', ') || 'None selected');
    addField("Est. Start Date", formData.startDate);

    // Save PDF on the user's computer
    doc.save(`Intake_${formData.legalName.replace(/[^a-z0-9]/gi, '_') || formData.ceoLastName}.pdf`);

    // Generate binary PDF Blob to attach to the email submission
    const pdfBlob = doc.output('blob');

    // Create a FormData object to enable multipart/form-data upload (supporting file attachments!)
    const uploadData = new FormData();
    uploadData.append("attachment", pdfBlob, `Intake_${formData.legalName.replace(/[^a-z0-9]/gi, '_') || formData.ceoLastName}.pdf`);
    uploadData.append("_subject", `New Branded Client Intake: ${formData.legalName}`);
    uploadData.append("Submitted From Domain", "www.creativefuturesmke.com");
    
    // Map human-readable fields to the email body
    uploadData.append("Legal Name of Business", formData.legalName);
    uploadData.append("Entity Type", formData.entityType);
    uploadData.append("Year Established", formData.yearEstablished);
    uploadData.append("Business Stage", formData.stage);
    uploadData.append("Website / Domain", formData.website);
    uploadData.append("CEO Name", `${formData.ceoFirstName} ${formData.ceoLastName}`);
    uploadData.append("CEO Email Address", formData.ceoEmail);
    if (formData.contactFirstName || formData.contactEmail) {
      uploadData.append("Primary Contact", `${formData.contactFirstName} ${formData.contactLastName} (${formData.contactEmail})`);
    }
    uploadData.append("Business Address", `${formData.address1} ${formData.address2 || ''}, ${formData.city}, ${formData.state} ${formData.zip}`);
    uploadData.append("Demographic Ownership", formData.identity.join(', ') || 'None selected');
    uploadData.append("Creative Disciplines", formData.disciplines.join(', ') || 'None selected');
    uploadData.append("Technical Assistance Needed", formData.assistance.join(', ') || 'None selected');
    uploadData.append("Key Business Challenge", formData.challenge);
    uploadData.append("Prior Program Engagement", formData.engagement);
    uploadData.append("Referral Channel", formData.referral.join(', ') || 'None selected');
    uploadData.append("Estimated Start Date", formData.startDate);

    try {
      const response = await fetch("https://formsubmit.co/ajax/geraud@culturexdesign.com", {
        method: "POST",
        headers: {
          'Accept': 'application/json'
        },
        body: uploadData // Browser automatically sets Content-Type to multipart/form-data with correct boundary!
      });
      if(response.ok) {
        setStatus('Success! Application received.');
      } else {
        setStatus('Network Error. PDF downloaded.');
      }
    } catch (err) {
      setStatus('Network Error. PDF generated locally.');
    }
  };

  return (
    <main className="intake-page bg-navy section-padding-y" style={{ paddingTop: '150px' }}>
      <div className="container" style={{ maxWidth: '1100px' }}>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ color: 'var(--cf-gold)', marginBottom: '20px', textAlign: 'center', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
        >
          Creative Futures Intake Form
        </motion.h1>
        <motion.div 
          className="intake-intro" 
          style={{ marginBottom: '40px', color: '#ccc', lineHeight: 1.8, fontSize: '1.1rem' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <p><strong>Welcome to Creative Futures.</strong> This intake form helps us better understand you, your creative practice, and the type of support that will be most useful to you through the Creative Futures program. The information you share allows us to tailor free small-business and technical assistance to your needs and helps us meet required program reporting for our funders.</p>
          <br/>
          <p>This form should take only a few minutes to complete. Demographic questions are used only in aggregate to ensure equitable access to resources. All information will be kept confidential and used solely for program delivery, evaluation, and reporting purposes.</p>
        </motion.div>
        
        <form className="intake-funnel" onSubmit={handleSubmit}>
          
          <div className="form-section">
            <h3>Consent to Participate & Data Use (required)</h3>
            <label className="checkbox-label">
              <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} required />
              <span>I understand that the information provided will be used for program delivery, evaluation, and required funder reporting in aggregate form.</span>
            </label>
          </div>

          <div className="form-section">
            <h3>Business Information</h3>
            <div className="form-field" style={{marginBottom: '20px'}}>
              <label>Legal Name of Business or Creative Entity (required)</label>
              <input type="text" name="legalName" value={formData.legalName} onChange={handleChange} placeholder="As registered, or your full legal name" required />
            </div>
            
            <div className="form-row" style={{marginBottom: '20px'}}>
              <div className="form-field">
                <label>Legal Entity Type</label>
                <select name="entityType" value={formData.entityType} onChange={handleChange} required>
                  <option value="">Select type...</option>
                  <option value="Individual/Sole Proprietor">Individual / Sole Proprietor</option>
                  <option value="LLC">LLC</option>
                  <option value="S-Corp">S-Corp</option>
                  <option value="C-Corp">C-Corp</option>
                  <option value="Nonprofit">Nonprofit</option>
                  <option value="Informal">Informal / Not yet legally formed</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="form-field">
                <label>Year Established (required)</label>
                <input type="text" name="yearEstablished" value={formData.yearEstablished} onChange={handleChange} required />
              </div>
            </div>

            <div className="form-field" style={{marginBottom: '20px'}}>
              <label>Business or Creative Stage (required)</label>
              <select name="stage" value={formData.stage} onChange={handleChange} required>
                <option value="">Select stage...</option>
                <option value="Idea stage">Idea stage (not yet launched)</option>
                <option value="Early stage">Early stage (launched within the last 1–2 years)</option>
                <option value="Growth stage">Growth stage (operating 3+ years, seeking expansion)</option>
                <option value="Established">Established (stable operations, scaling or diversification)</option>
              </select>
            </div>
            <div className="form-field">
              <label>Business or Creative Website</label>
              <input type="text" name="website" value={formData.website} onChange={handleChange} placeholder="e.g. www.yourbusiness.com" />
            </div>
          </div>

          <div className="form-section">
            <h3>CEO / Director / Lead Creative</h3>
            <div className="form-row" style={{marginBottom: '20px'}}>
              <div className="form-field"><label>First Name (required)</label><input type="text" name="ceoFirstName" value={formData.ceoFirstName} onChange={handleChange} required /></div>
              <div className="form-field"><label>Last Name (required)</label><input type="text" name="ceoLastName" value={formData.ceoLastName} onChange={handleChange} required /></div>
            </div>
            <div className="form-field"><label>Email (required)</label><input type="email" name="ceoEmail" value={formData.ceoEmail} onChange={handleChange} required /></div>
            
            <h4 style={{marginTop: '30px', marginBottom: '10px', color: '#fff'}}>Primary Contact (If different from above)</h4>
            <div className="form-row" style={{marginBottom: '20px'}}>
              <div className="form-field"><label>First Name</label><input type="text" name="contactFirstName" value={formData.contactFirstName} onChange={handleChange} /></div>
              <div className="form-field"><label>Last Name</label><input type="text" name="contactLastName" value={formData.contactLastName} onChange={handleChange} /></div>
            </div>
            <div className="form-field"><label>Email</label><input type="email" name="contactEmail" value={formData.contactEmail} onChange={handleChange} /></div>
          </div>

          <div className="form-section">
            <h3>Address</h3>
            <div className="form-field" style={{marginBottom: '20px'}}><label>Country</label><input type="text" name="country" value={formData.country} readOnly /></div>
            <div className="form-field" style={{marginBottom: '20px'}}><label>Address Line 1 (required)</label><input type="text" name="address1" value={formData.address1} onChange={handleChange} required /></div>
            <div className="form-field" style={{marginBottom: '20px'}}><label>Address Line 2</label><input type="text" name="address2" value={formData.address2} onChange={handleChange} /></div>
            <div className="form-row">
              <div className="form-field"><label>City (required)</label><input type="text" name="city" value={formData.city} onChange={handleChange} required /></div>
              <div className="form-field"><label>State (required)</label><input type="text" name="state" value={formData.state} onChange={handleChange} required /></div>
              <div className="form-field"><label>ZIP (required)</label><input type="text" name="zip" value={formData.zip} onChange={handleChange} required /></div>
            </div>
          </div>

          <div className="form-section">
            <h3>Demographics & Practice</h3>
            <label className="section-subtitle">Do you identify your business or creative practice as any of the following?</label>
            <div className="checkbox-grid" style={{marginBottom: '30px'}}>
              {['Women-owned', 'Veteran-owned', 'Disabled-owned', 'LGBTQ+-owned', 'American Indian or Alaska Native-owned', 'Black or African-owned', 'Asian American or Pacific Islander-owned', 'Hispanic or Latinx-owned'].map(opt => (
                <label className="checkbox-label" key={opt}><input type="checkbox" name="identity" value={opt} onChange={handleChange} /><span>{opt}</span></label>
              ))}
            </div>

            <label className="section-subtitle">Creative Discipline(s)</label>
            <div className="checkbox-grid">
              {['Visual Art', 'Fashion', 'Music', 'Film', 'Design', 'Culinary', 'Performing Arts', 'Other'].map(opt => (
                <label className="checkbox-label" key={opt}><input type="checkbox" name="disciplines" value={opt} onChange={handleChange} /><span>{opt}</span></label>
              ))}
            </div>
          </div>

          <div className="form-section">
            <h3>Assistance & Engagement</h3>
            <label className="section-subtitle">What type(s) of technical assistance are you seeking?</label>
            <div className="checkbox-grid" style={{marginBottom: '30px'}}>
              {['Business planning & strategy', 'Branding & marketing', 'Financial management & budgeting', 'Pricing & revenue strategy', 'Digital presence (website, SEO, social media)', 'Legal or business formation guidance', 'Grant readiness or funding strategy', 'Operations & workflow support', 'Other'].map(opt => (
                <label className="checkbox-label" key={opt}><input type="checkbox" name="assistance" value={opt} onChange={handleChange} /><span>{opt}</span></label>
              ))}
            </div>
            
            <div className="form-field" style={{marginBottom: '30px'}}>
              <label>What is one key challenge you hope Creative Futures can help you address?</label>
              <textarea name="challenge" rows="3" value={formData.challenge} onChange={handleChange}></textarea>
            </div>

            <label className="section-subtitle">Have you already engaged with Creative Futures?</label>
            <div className="radio-group" style={{marginBottom: '30px'}}>
              {['Attended public programming', 'Met one-on-one with a representative', 'Not yet but request support'].map(opt => (
                <label className="checkbox-label" key={opt}><input type="radio" name="engagement" value={opt} onChange={handleChange} /><span>{opt}</span></label>
              ))}
            </div>

            <label className="section-subtitle">How did you hear about Creative Futures?</label>
            <div className="checkbox-grid" style={{marginBottom: '30px'}}>
              {['Search Engine', 'Social Media', 'Website', 'Newsletter', 'Attended Event', 'Referral', 'Other'].map(opt => (
                <label className="checkbox-label" key={opt}><input type="checkbox" name="referral" value={opt} onChange={handleChange} /><span>{opt}</span></label>
              ))}
            </div>

            <div className="form-field">
              <label>Approximate Date You Expect to Begin Receiving Assistance</label>
              <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} />
            </div>
          </div>
          
          <button className="primary submit-btn" type="submit" disabled={status === 'Submitting...'}>
            {status === 'Submitting...' ? 'PROCESSING...' : 'SUBMIT PROGRAM INTAKE FILE'}
          </button>
          
          {status && <p style={{ marginTop: '20px', textAlign: 'center', color: 'var(--cf-gold)', fontWeight: 700 }}>{status}</p>}
        </form>
      </div>
    </main>
  );
};

export default Intake;
