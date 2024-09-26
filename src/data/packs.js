// Import required icons
import { faHandshake, faBriefcase, faMotorcycle } from '@fortawesome/free-solid-svg-icons';

// Array of packages
export const packs = [
    {
        name: "Base Pack",
        icon: faHandshake,
        subtitle: "Learn to ride from the professionals.",
        price: "$1800",
        features: [
            { text: "✓ Phone Mountaineer bike training", included: true },
            { text: "✓ Remote Excellent bike service", included: true },
            { text: "✓ Onsite Safe cycling training", included: true },
            { text: "✗ Safety helmet on bike", included: false },
            { text: "✗ Free bikes for children", included: false }
        ]
    },
    {
        name: "Standard Pack",
        icon: faBriefcase,
        subtitle: "Learn to ride from the professionals.",
        price: "$2500",
        features: [
            { text: "✓ Phone Mountaineer bike training", included: true },
            { text: "✓ Remote Excellent bike service", included: true },
            { text: "✓ Onsite Safe cycling training", included: true },
            { text: "✗ Safety helmet on bike", included: false },
            { text: "✗ Free bikes for children", included: false }
        ]
    },
    {
        name: "Premium Pack",
        icon: faMotorcycle,
        subtitle: "Learn to ride from the professionals.",
        price: "$5000",
        features: [
            { text: "✓ Phone Mountaineer bike training", included: true },
            { text: "✓ Remote Excellent bike service", included: true },
            { text: "✓ Onsite Safe cycling training", included: true },
            { text: "✗ Safety helmet on bike", included: false },
            { text: "✗ Free bikes for children", included: false }
        ]
    }
];
