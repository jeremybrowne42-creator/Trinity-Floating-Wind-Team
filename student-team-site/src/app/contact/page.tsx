"use client";

import { useState } from "react";
import Section from "@/components/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Wire to email service or Airtable
    alert("Form submission not yet configured. Please contact us via email.");
  };

  return (
    <>
      <Section>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Interested in joining, sponsoring, or collaborating? Get in touch!
          </p>

          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="text-sm font-medium mb-2 block">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium mb-2 block">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium mb-2 block">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>
                <Button type="submit">Send Message</Button>
              </form>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a
                    href="mailto:contact@trinityfloatingwind.ie"
                    className="text-muted-foreground hover:text-foreground underline"
                  >
                    contact@trinityfloatingwind.ie
                  </a>
                  {/* TODO: Update with actual email */}
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Social Media</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>
                      {/* TODO: Add actual social media links */}
                      LinkedIn:{" "}
                      <a
                        href="#"
                        className="underline hover:text-foreground"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        @trinityfloatingwind
                      </a>
                    </p>
                    <p>
                      Twitter:{" "}
                      <a
                        href="#"
                        className="underline hover:text-foreground"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        @trinityfloatingwind
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

