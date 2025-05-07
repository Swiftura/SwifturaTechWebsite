import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  company: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    try {
      // For GitHub Pages, we'll just simulate a successful form submission
      // In a real implementation, you would use a form submission service like Formspree
      console.log("Form data:", data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
        variant: "default",
      });
      
      reset();
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Your message couldn't be sent. Please try again.",
        variant: "destructive",
      });
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            {...register("name")}
            className="w-full bg-dark-darker border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-light"
            placeholder="John Doe"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            className="w-full bg-dark-darker border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-light"
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>
      </div>
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
          Company
        </label>
        <input
          type="text"
          id="company"
          {...register("company")}
          className="w-full bg-dark-darker border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-light"
          placeholder="Your Company"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
          Message
        </label>
        <textarea
          id="message"
          {...register("message")}
          rows={4}
          className="w-full bg-dark-darker border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-light"
          placeholder="How can we help you?"
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-3 px-4 rounded-lg transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
