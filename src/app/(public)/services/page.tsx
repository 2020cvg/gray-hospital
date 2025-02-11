"use client";
import React from "react";
import { Card } from "antd";

const services = [
  { name: "Cardiology", description: "Specialized care for heart-related conditions." },
  { name: "Dentistry", description: "Comprehensive dental services and oral care." },
  { name: "Dermatology", description: "Treatment for skin, hair, and nail conditions." },
  { name: "Endocrinology", description: "Specialized treatment for hormonal disorders." },
  { name: "Gastroenterology", description: "Care for digestive system disorders." },
  { name: "General Practitioner", description: "Primary care and general medical consultations." },
  { name: "Hematology", description: "Care for blood disorders and diseases." },
  { name: "Neurology", description: "Specialized treatment for neurological disorders." },
  { name: "Oncology", description: "Cancer diagnosis and treatment." },
  { name: "Ophthalmology", description: "Eye care and treatment for vision disorders." },
  { name: "Orthopedics", description: "Treatment for musculoskeletal issues." },
  { name: "Otolaryngology", description: "Care for ear, nose, and throat conditions." },
  { name: "Pediatrics", description: "Healthcare services for children." },
  { name: "Psychiatry", description: "Mental health care and therapy services." },
  { name: "Pulmonology", description: "Treatment for lung and respiratory conditions." },
  { name: "Radiology", description: "Diagnostic imaging and radiological services." },
  { name: "Rheumatology", description: "Treatment for joint and autoimmune diseases." },
  { name: "Urology", description: "Care for urinary tract and male reproductive health." },
  { name: "Emergency Services", description: "24/7 emergency response and critical care." }
];

function ServicesPage() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-5">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service, index) => (
          <Card key={index} title={service.name} bordered={true}>
            <p>{service.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default ServicesPage;
