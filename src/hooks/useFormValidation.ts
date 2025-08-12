import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const useFormValidation = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'name':
        {
          if (!value.trim()) return 'Name is required';
          if (value.trim().length < 2) return 'Name must be at least 2 characters';
        }
        break;
      case 'email':
        {
          if (!value.trim()) return 'Email is required';
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(value)) return 'Please enter a valid email';
        }
        break;
      case 'subject':
        {
          if (!value.trim()) return 'Subject is required';
          if (value.trim().length < 5) return 'Subject must be at least 5 characters';
        }
        break;
      case 'message':
        {
          if (!value.trim()) return 'Message is required';
          if (value.trim().length < 10) return 'Message must be at least 10 characters';
        }
        break;
    }
  };

  const handleChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleBlur = (name: string) => {
    const error = validateField(name, formData[name as keyof FormData]);
    if (error) {
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    Object.entries(formData).forEach(([name, value]) => {
      const error = validateField(name, value);
      if (error) {
        newErrors[name as keyof FormErrors] = error;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (onSubmit?: (data: FormData) => Promise<void>) => {
    if (!validateForm()) return false;

    setIsSubmitting(true);
    
    try {
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        // Default behavior - open email client
        const subject = encodeURIComponent(formData.subject);
        const body = encodeURIComponent(
          `Hi Nishant,\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`
        );
        window.open(`mailto:ishantkumaryts@gmail.com?subject=${subject}&body=${body}`);
      }
      
      // Reset form on success
      setFormData({ name: '', email: '', subject: '', message: '' });
      return true;
    } catch (error) {
      console.error('Form submission error:', error);
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    validateForm
  };
};