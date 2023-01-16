import Accordion from "lib/Accordion";
import { transformPayload } from "./transformPayload";

const data = {
  "totalInPage": 100,
  "totalItems": 100,
  "totalPages": 1,
  "items": [
    {
      "id": "f873e8be-d489-4259-8c94-417bc4f136f0",
      "farmer": {
        "firstName": "Evan",
        "lastName": "Boyle"
      },
      "status": "ready",
      "credit_requests": [
        {
          "id": "0437c1ec-39ec-4eae-abe8-34626e112709",
          "farmer_id": "1055a0da-2317-441d-8f94-65f0fb6e1b12",
          "purpose": ["seeds"],
          "season": "Paper Doll",
          "due_date": "2023-06-20T17:53:23.118Z",
          "amount": 135928025.48
        },
        {
          "id": "c2d7af43-b152-40b1-94dc-c7379496e1e7",
          "farmer_id": "1055a0da-2317-441d-8f94-65f0fb6e1b12",
          "purpose": ["seeds"],
          "season": "Don't You Want Me",
          "due_date": "2023-10-31T17:04:18.492Z",
          "amount": 820815638.52
        }
      ]
    },
    {
      "id": "60a5ca0b-27c8-42be-8bc0-8bdfe4360300",
      "farmer": {
        "firstName": "Thomas",
        "lastName": "Ledner"
      },
      "status": "draft",
      "credit_requests": [
        {
          "id": "3698d19e-fb4b-4978-b6f6-843f4294ac63",
          "farmer_id": "d2097e7d-52c7-49be-a49a-2b302299e4b6",
          "purpose": ["chemicals"],
          "season": "The Thing",
          "due_date": "2023-11-13T16:49:39.980Z",
          "amount": 570021466.16
        },
        {
          "id": "80d5a21c-b332-4ee2-8a8d-8a0ec2ef7a24",
          "farmer_id": "d2097e7d-52c7-49be-a49a-2b302299e4b6",
          "purpose": ["fertilizer"],
          "season": "Umbrella",
          "due_date": "2023-09-25T05:17:45.175Z",
          "amount": 532786707.06
        },
        {
          "id": "42d08d56-6743-49e7-bf68-114946bd57ef",
          "farmer_id": "d2097e7d-52c7-49be-a49a-2b302299e4b6",
          "purpose": ["chemicals", "seeds"],
          "season": "Bette Davis Eyes",
          "due_date": "2023-05-13T13:03:23.215Z",
          "amount": 54076016.25
        }
      ]
    },
    {
      "id": "979956e7-0e88-4fe9-9136-41a3d2a944c7",
      "farmer": {
        "firstName": "Jodi",
        "lastName": "Bashirian"
      },
      "status": "approved",
      "credit_requests": [
        {
          "id": "109cbc74-9890-4fc3-9ca1-8531dd355c81",
          "farmer_id": "eff0c3e3-ba41-45fa-af5a-535e57060758",
          "purpose": ["chemicals", "seeds", "fertilizer"],
          "season": "Runaround Sue",
          "due_date": "2023-04-05T13:02:44.214Z",
          "amount": 695235287.93
        },
        {
          "id": "96970b29-6051-4c9e-89c5-6219cfc0bbfd",
          "farmer_id": "eff0c3e3-ba41-45fa-af5a-535e57060758",
          "purpose": ["chemicals"],
          "season": "That'll Be the Day",
          "due_date": "2023-07-24T23:05:54.052Z",
          "amount": 410671898.15
        },
        {
          "id": "d46eb8b6-4691-4ac0-b59a-46f7babfa0d3",
          "farmer_id": "eff0c3e3-ba41-45fa-af5a-535e57060758",
          "purpose": ["fertilizer", "seeds"],
          "season": "One",
          "due_date": "2023-09-30T13:29:24.333Z",
          "amount": 21682358.98
        },
        {
          "id": "66326bf7-cf03-4bb9-b993-b6e82ea70299",
          "farmer_id": "eff0c3e3-ba41-45fa-af5a-535e57060758",
          "purpose": ["seeds", "fertilizer", "chemicals"],
          "season": "Vogue",
          "due_date": "2023-08-29T21:34:46.357Z",
          "amount": 475726224.61
        }
      ]
    },
  ],
};

const Content = () => {
  const accordionData = transformPayload(data.items);

  return (
    <div className="w-full">
      <Accordion data={accordionData} />
    </div>
  );
};

export default Content;

// import Accordion from "components/common/Accordion";
// import { useState } from "react";
// import { normalizeCurrency } from "utils";
// import { GRID_COLS, BORDER_COLOR } from "../styles";
// import SubItems from "./SubItems";

// const data = {
//   "totalInPage": 100,
//   "totalItems": 100,
//   "totalPages": 1,
//   "items": [
//     {
//       "id": "f873e8be-d489-4259-8c94-417bc4f136f0",
//       "farmer": {
//         "firstName": "Evan",
//         "lastName": "Boyle"
//       },
//       "status": "approved",
//       "credit_requests": [
//         {
//           "id": "0437c1ec-39ec-4eae-abe8-34626e112709",
//           "farmer_id": "1055a0da-2317-441d-8f94-65f0fb6e1b12",
//           "purpose": ["seeds"],
//           "season": "Paper Doll",
//           "due_date": "2023-06-20T17:53:23.118Z",
//           "amount": 135928025.48
//         },
//         {
//           "id": "c2d7af43-b152-40b1-94dc-c7379496e1e7",
//           "farmer_id": "1055a0da-2317-441d-8f94-65f0fb6e1b12",
//           "purpose": ["seeds"],
//           "season": "Don't You Want Me",
//           "due_date": "2023-10-31T17:04:18.492Z",
//           "amount": 820815638.52
//         }
//       ]
//     },
//     {
//       "id": "60a5ca0b-27c8-42be-8bc0-8bdfe4360300",
//       "farmer": {
//         "firstName": "Thomas",
//         "lastName": "Ledner"
//       },
//       "status": "draft",
//       "credit_requests": [
//         {
//           "id": "3698d19e-fb4b-4978-b6f6-843f4294ac63",
//           "farmer_id": "d2097e7d-52c7-49be-a49a-2b302299e4b6",
//           "purpose": ["chemicals"],
//           "season": "The Thing",
//           "due_date": "2023-11-13T16:49:39.980Z",
//           "amount": 570021466.16
//         },
//         {
//           "id": "80d5a21c-b332-4ee2-8a8d-8a0ec2ef7a24",
//           "farmer_id": "d2097e7d-52c7-49be-a49a-2b302299e4b6",
//           "purpose": ["fertilizer"],
//           "season": "Umbrella",
//           "due_date": "2023-09-25T05:17:45.175Z",
//           "amount": 532786707.06
//         },
//         {
//           "id": "42d08d56-6743-49e7-bf68-114946bd57ef",
//           "farmer_id": "d2097e7d-52c7-49be-a49a-2b302299e4b6",
//           "purpose": ["chemicals", "seeds"],
//           "season": "Bette Davis Eyes",
//           "due_date": "2023-05-13T13:03:23.215Z",
//           "amount": 54076016.25
//         }
//       ]
//     },
//   ],
// };

// const Content = () => {
//   const [open, setOpen] = useState(-1);

//   const handleOnChevronClick = (isOpen: boolean, index: number) => {
//     setOpen(isOpen ? -1 : index);
//   };

//   return (
//     <div className="w-full">
//       {
//         data.items.map(({
//           id,
//           farmer,
//           credit_requests: creditRequests,
//           status,
//         }, index) => {
//           const dueDate = new Date(
//             creditRequests[creditRequests.length - 1].due_date
//           ).toISOString().substring(0, 10);
          
//           const totalRaw = creditRequests.reduce((a, creditRequests) => (
//             a + creditRequests.amount), 0);
        
//           const totalNormalized = normalizeCurrency(totalRaw);

//           const actions = <b>...</b>;
          
//           return (
//             <Accordion
//               key={id}
//               open={open === index}
//               items={[
//                 `${farmer.firstName} ${farmer.lastName}`,
//                 totalNormalized,
//                 status,
//                 dueDate,
//                 actions,
//               ]}
//               gridCols={GRID_COLS}
//               borderColor={BORDER_COLOR}
//               onChevronClick={(isOpen) => handleOnChevronClick(isOpen, index)}
//             >
//               <SubItems data={creditRequests} />
//             </Accordion>
//           );
//         })
//       }
//     </div>
//   );
// };

// export default Content;
