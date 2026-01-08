export const ncertData = [
  {
    id: 1,
    title: "The Solid State",
    subtitle: "1.1 General Characteristics",
    time: "15 mins read",
    content: [
      {
        text: "Solids are characterized by definite shape, volume, and high density. In the solid state, the constituent particles (atoms, molecules, or ions) have fixed positions and can only oscillate about their mean positions.",
        isKey: false
      },
      {
        text: "Intermolecular forces are very strong in solids, which keeps them closely packed together.",
        isKey: true // Yeh line 'Hide Keys' mode me blur ho jayegi
      }
    ],
    highlight: "Key Concept: Solids have strong intermolecular forces and fixed positions.",
    quiz: {
      question: "Why do solids have a definite shape?",
      options: ["Weak forces", "Strong Intermolecular Forces", "High Temp", "Random Motion"],
      answer: "Strong Intermolecular Forces"
    }
  },
  {
    id: 2,
    title: "Solutions",
    subtitle: "2.1 Types of Solutions",
    time: "12 mins read",
    content: [
      {
        text: "A solution is a homogeneous mixture of two or more components. The component that is present in the largest quantity is known as the solvent.",
        isKey: false
      },
      {
        text: "Solvent determines the physical state in which solution exists. Solute is the component present in lesser quantity.",
        isKey: true
      }
    ],
    highlight: "Remember: Solvent = Largest Quantity, Solute = Lesser Quantity.",
    quiz: {
      question: "Which component determines the physical state?",
      options: ["Solute", "Solvent", "Heat", "Pressure"],
      answer: "Solvent"
    }
  },
  {
    id: 3,
    title: "Electrochemistry",
    subtitle: "3.1 Electrochemical Cells",
    time: "18 mins read",
    content: [
      {
        text: "Electrochemistry is the study of production of electricity from energy released during spontaneous chemical reactions.",
        isKey: false
      },
      {
        text: "A Galvanic cell converts chemical energy into electrical energy. Example: Daniel Cell.",
        isKey: true
      }
    ],
    highlight: "Fact: Daniel Cell uses Zinc (Anode) and Copper (Cathode).",
    quiz: {
      question: "In a Daniel cell, Zinc acts as:",
      options: ["Cathode", "Anode", "Electrolyte", "Bridge"],
      answer: "Anode"
    }
  },
  {
    id: 4,
    title: "Chemical Kinetics",
    subtitle: "4.1 Rate of Reaction",
    time: "20 mins read",
    content: [
      {
        text: "Chemical Kinetics deals with the rate of reaction. Rate is the change in concentration of reactant or product in unit time.",
        isKey: false
      },
      {
        text: "For a reaction R -> P, Rate = -Δ[R]/Δt.",
        isKey: true
      }
    ],
    highlight: "Formula: Rate depends on the concentration of reactants.",
    quiz: {
      question: "Rate of reaction is change in ____ per unit time.",
      options: ["Volume", "Mass", "Concentration", "Pressure"],
      answer: "Concentration"
    }
  },
  {
    id: 5,
    title: "Surface Chemistry",
    subtitle: "5.1 Adsorption",
    time: "10 mins read",
    content: [
      {
        text: "Adsorption is the accumulation of molecular species at the surface rather than in the bulk of a solid or liquid.",
        isKey: false
      },
      {
        text: "Physisorption arises due to van der Waals forces.",
        isKey: true
      }
    ],
    highlight: "Distinction: Adsorption is Surface, Absorption is Bulk.",
    quiz: {
      question: "Adsorption is a ____ phenomenon.",
      options: ["Bulk", "Surface", "Internal", "Chemical"],
      answer: "Surface"
    }
  }
];