//src\data\mock\mockdata.ts

import { Collection } from "@/lib/vector/ifc/collection";
import { SearchResult } from "@/lib/vector/ifc/searchresult";

// Mock data - replace with API call
export const mockCollections: Collection[] = [
  { id: "1", name: "Project Alpha Documents", itemCount: 1250 },
  { id: "2", name: "Customer Feedback Q3", itemCount: 780 },
  { id: "3", name: "Research Papers - AI Ethics", itemCount: 340 },
  { id: "4", name: "Internal Memos 2023", itemCount: 2100 },
  { id: "5", name: "Product Specifications v2", itemCount: 95 },
];

 // Mock collections for the dropdown
  export const mockSelectCollections = ["Project Alpha Documents", "Customer Feedback Q3", "Research Papers - AI Ethics", "All Data"];

  export const mockSearchResults: SearchResult[] = [
    {id: "res1", title: "Document Alpha", snippet: "Relevant information regarding project alpha findings...", score: 0.92},
    {id: "res2", title: "Feedback Summary Q3", snippet: "Key takeaways from customer feedback in the third quarter...", score: 0.88},
  ];
  