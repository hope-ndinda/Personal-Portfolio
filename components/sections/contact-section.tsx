"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from "@/components/ui/section-heading";

// Form schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

// Contact info
const contactInfo = [
  {
    icon: <Mail className="h-6 w-6 text-primary" />,
    title: "Email",
    value: "hopenishimwe5@gmail.com",
    link: "email:hopenishimwe5@gmail.com",
  },
  {
    icon: <Phone className="h-6 w-6 text-primary" />,
    title: "Phone",
    value: "+250 735 939 385",
    link: "tel:+2507359399385",
  },
  {
    icon: <MapPin className="h-6 w-6 text-primary" />,
    title: "Location",
    value: "Rwanda, Kigali",
    link: null,
  },
];

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  // ✅ Updated async form submission
  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mzzgeoep", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitSuccessful(true);
        form.reset();
        setTimeout(() => setIsSubmitSuccessful(false), 3000);
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container px-4 mx-auto" ref={ref}>
        <SectionHeading
          title="Get In Touch"
          subtitle="Let's work together"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-1 space-y-6"
          >
            <div className="text-xl font-semibold">Contact Information</div>
            <p className="text-muted-foreground">
              Feel free to reach out to me for any questions or opportunities. I'll get back to you as soon as possible.
            </p>

            <div className="space-y-4 pt-4">
              {contactInfo.map((item, index) => (
                <Card key={index} className="border-border/40 bg-card/60 backdrop-blur-sm">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div>{item.icon}</div>
                    <div>
                      <div className="text-sm font-medium">{item.title}</div>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-muted-foreground">{item.value}</div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2"
          >
            <Card className="border-border/40 bg-card/60 backdrop-blur-sm">
              <CardContent className="p-6">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="Your email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="Subject of your message" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Your message"
                              className="min-h-[120px] resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="flex justify-end">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto"
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                        <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                    {isSubmitSuccessful && (
                      <div className="text-green-500 text-center font-medium">
                        Thank you! Your message has been sent successfully.
                      </div>
                    )}
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
