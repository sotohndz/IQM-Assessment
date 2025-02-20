# Project Documentation

## Overview

This project uses a variety of components for user interaction, including moodlets, dropdowns, and style variants. The system is built on Node 22, Vite 6.11, React 19.0.0, and Tailwind CSS v4.

## Components

### Moodlet

The moodlet component is used to show user-summarized information and allow interaction. A moodlet can contain a single letter code, an icon, an ellipsis, a multi-letter code, or a multi-letter code with an icon.

#### Content Options

- Letter
- Icon
- Ellipsis
- Word
- Icon Left
- Icon Right

#### Style Variants

- **Primary | Active**
- **Inactive**
- **Secondary | Planning**
- **Blue | Released**
- **Green | OK**
- **Red | Stop/Block**
- **Yellow | Warning**
- **Placeholder**
- **Disabled**

#### Interaction

- Read only moodlets
- Interaction possible (default and hover styles)
- Button styles for interaction

### FSC Logic

The FSC (Fuelling, Servicing, Cleaning) component indicates the state of something in the system, following this logic:

- **Right-click** to change from "required" to "not required."
- **Left-click** cycles between the states of "current" and "completed."

States:

- **Not Required**
- **Required**
- **Current**
- **Completed**

Variants for display:

- **Letter Version**
- **Word Version** (Fuelling, Servicing, Cleaning)

### Dropdown

The dropdown component is used for selecting an option from structured data.

#### Dropdown Option Styles

- **Desktop:**
  - Default
  - Hover
  - Selected
  - Disabled
- **Mobile:**
  - Default
  - Hover
  - Selected
  - Disabled

#### Dropdown Menu

- **Desktop & Mobile:**
  - Text options
  - Moodlet options

## Installation

### Prerequisites

- Node.js v22
- Vite v6.11
- React v19.0.0
- Tailwind CSS v4

### Setup Instructions

1. Clone this repository:
   ```
   git clone git@github.com:sotohndz/IQM-Assessment.git
   ```
2. Navigate to the project directory:
   ```
   cd iqm-assessment
   ```
3. Install the required dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm run dev
   ```

## License

This project is licensed under the MIT License.
