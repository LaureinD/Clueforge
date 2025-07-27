import { PaperAirplaneIcon, WrenchScrewdriverIcon, CreditCardIcon } from "@heroicons/react/24/outline";
import { JSX } from "react";

export type FAQItem = {
    question: string;
    answer: string;
};

export type FAQSection = {
    title: string;
    icon: JSX.Element;
    items: FAQItem[];
};

export const faqs: FAQSection[] = [
    {
        title: "Getting Started",
        icon: <PaperAirplaneIcon className="w-5 h-5 text-primary" />,
        items: [
            {
                question: "What is ClueForge?",
                answer:
                    "A powerful online tool that lets you design, organize, and share custom escape rooms — no coding skills needed.",
            },
            {
                question: "Do I need any experience to use ClueForge?",
                answer:
                    "Not at all! ClueForge is built for beginners and pros alike. Our interface is intuitive and user-friendly.",
            },
            {
                question: "Is there a free version available?",
                answer: "Yes, you can start with our free Starter plan and upgrade whenever you need more features.",
            },
            {
                question: "Can I test ClueForge without creating an account?",
                answer:
                    "Currently, you need an account to save and manage your puzzles, but signing up is quick and free.",
            },
            {
                question: "What kind of escape rooms can I create?",
                answer:
                    "From classroom games to corporate team-building or complex puzzle adventures — ClueForge is flexible enough for all types.",
            },
        ],
    },
    {
        title: "Features & Usage",
        icon: <WrenchScrewdriverIcon className="w-5 h-5 text-danger" />,
        items: [
            {
                question: "Can I reuse or duplicate puzzles?",
                answer:
                    "Yes! You can easily copy puzzles from your library and adapt them for new escape rooms.",
            },
            {
                question: "Can I work on a project with others?",
                answer:
                    "No, at the moment collaboration is not available. You can, however, share your creations with friends.",
            },
            {
                question: "Can I upload images, documents, or media to puzzles?",
                answer:
                    "Absolutely — every puzzle and room supports attachments for clues, visuals, or instructions.",
            },
            {
                question: "Is there a library of pre-made puzzles?",
                answer:
                    "Yes! You can explore and use puzzles from our shared online library to get inspired or save time.",
            },
            {
                question: "How do I organize my escape rooms?",
                answer:
                    "Use folders, tags, and overviews to group puzzles and plan each room clearly and efficiently.",
            },
        ],
    },
    {
        title: "Plans & Account",
        icon: <CreditCardIcon className="w-5 h-5 text-success" />,
        items: [
            {
                question: "What happens if I cancel my subscription?",
                answer:
                    "Your content stays safe. You’ll switch to the free plan and lose access to premium features, but your work remains available.",
            },
            {
                question: "Can I upgrade or downgrade my plan at any time?",
                answer:
                    "Yes, you can switch plans at any time — changes will take effect at the end of your current billing period, so you’ll continue to enjoy your current features until then.",
            },
            {
                question: "Is my data and content secure?",
                answer:
                    "Yes, we take data privacy seriously. All your content is stored securely and backed up regularly.",
            },
            {
                question: "Do you offer discounts for educators or non-profits?",
                answer:
                    "Yes! Reach out to us and we’ll be happy to discuss custom pricing options.",
            },
            {
                question: "What payment methods do you accept?",
                answer:
                    "We support major credit cards and soon also PayPal and other local options.",
            },
        ],
    },
];
