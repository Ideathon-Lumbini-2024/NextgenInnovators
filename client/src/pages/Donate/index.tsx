import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface FormData {
  // Personal Info
  firstName: string;
  lastName: string;
  dateOfBirth: string;

  // Contact Details
  email: string;
  phone: string;
  address: string;
}

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          {["Personal Info", "Contact Details", "Review"].map(
            (label, index) => (
              <div key={label} className="flex flex-col items-center flex-1">
                <div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium border-2",
                    step > index + 1 &&
                      "bg-blue-500 border-blue-500 text-white",
                    step === index + 1 && "border-blue-500 text-blue-500",
                    step < index + 1 && "border-gray-300 text-gray-300",
                  )}
                >
                  {index + 1}
                </div>
                <span
                  className={cn(
                    "text-sm mt-2",
                    step >= index + 1 ? "text-blue-500" : "text-gray-300",
                  )}
                >
                  {label}
                </span>
              </div>
            ),
          )}
        </div>
        <div className="w-full bg-gray-200 h-2 rounded-full">
          <div
            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((step - 1) / 2) * 100}%` }}
          />
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>
            {step === 1 && "Personal Information"}
            {step === 2 && "Contact Details"}
            {step === 3 && "Review Your Information"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            {/* Step 1: Personal Information */}
            {step === 1 && (
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="dateOfBirth">Date of Birth</Label>
                  <Input
                    id="dateOfBirth"
                    name="dateOfBirth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            )}

            {/* Step 2: Contact Details */}
            {step === 2 && (
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            )}

            {/* Step 3: Review */}
            {step === 3 && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-medium mb-2">Personal Information</h3>
                    <p>First Name: {formData.firstName}</p>
                    <p>Last Name: {formData.lastName}</p>
                    <p>Date of Birth: {formData.dateOfBirth}</p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Contact Details</h3>
                    <p>Email: {formData.email}</p>
                    <p>Phone: {formData.phone}</p>
                    <p>Address: {formData.address}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-6">
              {step > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={handlePrevious}
                >
                  Previous
                </Button>
              )}
              <div className="ml-auto">
                {step < 3 ? (
                  <Button type="button" onClick={handleNext}>
                    Next
                  </Button>
                ) : (
                  <Button type="submit">Submit</Button>
                )}
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default MultiStepForm;
