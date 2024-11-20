import React, { useState, useRef } from 'react';
import './SupporterForm.css';

interface FormData {
  fullName: string;
  frontImage: File | null;
  backImage: File | null;
}

const SupporterForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    frontImage: null,
    backImage: null,
  });

  const [preview, setPreview] = useState({
    front: '',
    back: '',
  });

  const frontInputRef = useRef<HTMLInputElement>(null);
  const backInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, side: 'front' | 'back') => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        [side === 'front' ? 'frontImage' : 'backImage']: file
      }));

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(prev => ({
          ...prev,
          [side]: reader.result as string
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData);
  };

  const triggerImageUpload = (side: 'front' | 'back') => {
    if (side === 'front' && frontInputRef.current) {
      frontInputRef.current.click();
    } else if (side === 'back' && backInputRef.current) {
      backInputRef.current.click();
    }
  };

  return (
    <div className="supporter-form-container">
      <div className="supporter-form-box">
        <div className="form-header">
          <h1>Supporter Registration</h1>
          <p>Please provide your details to register as a supporter</p>
        </div>

        <form onSubmit={handleSubmit} className="supporter-form">
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="citizenship-section">
            <h2>Citizenship Card Photos</h2>
            
            <div className="image-upload-container">
              <div className="image-upload-box">
                <input
                  type="file"
                  ref={frontInputRef}
                  onChange={(e) => handleImageChange(e, 'front')}
                  accept="image/*"
                  style={{ display: 'none' }}
                />
                <div 
                  className="image-upload-area"
                  onClick={() => triggerImageUpload('front')}
                >
                  {preview.front ? (
                    <img src={preview.front} alt="Front side preview" className="image-preview" />
                  ) : (
                    <div className="upload-placeholder">
                      <i className="upload-icon">📄</i>
                      <span>Upload Front Side</span>
                      <span className="upload-hint">Click to select image</span>
                    </div>
                  )}
                </div>
                <span className="image-label">Front Side</span>
              </div>

              <div className="image-upload-box">
                <input
                  type="file"
                  ref={backInputRef}
                  onChange={(e) => handleImageChange(e, 'back')}
                  accept="image/*"
                  style={{ display: 'none' }}
                />
                <div 
                  className="image-upload-area"
                  onClick={() => triggerImageUpload('back')}
                >
                  {preview.back ? (
                    <img src={preview.back} alt="Back side preview" className="image-preview" />
                  ) : (
                    <div className="upload-placeholder">
                      <i className="upload-icon">📄</i>
                      <span>Upload Back Side</span>
                      <span className="upload-hint">Click to select image</span>
                    </div>
                  )}
                </div>
                <span className="image-label">Back Side</span>
              </div>
            </div>
          </div>

          <button type="submit" className="submit-button">
            Submit Registration
          </button>
        </form>
      </div>
    </div>
  );
};

export default SupporterForm;
