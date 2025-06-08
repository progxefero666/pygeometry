//src\application\dashboard\ExportPanel.tsx

"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/radix/card";
import { Button } from "@/radix/button";
import { Download, FileJson, FileText, FileSpreadsheet } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/radix/select";
import { Label } from "@/radix/label";
import { useState } from "react";
import { useToast } from "@/application/hooks/use-toast";


export function ExportPanel() {
  const [selectedCollection, setSelectedCollection] = useState<string | undefined>(undefined);
  const { toast } = useToast();

  const handleExport = (format: "JSON" | "Markdown" | "CSV") => {
    if (!selectedCollection) {
      toast({
        title: "Selection Required",
        description: "Please select a collection to export.",
        variant: "destructive",
      });
      return;
    }
    // Simulate API call for export
    toast({
      title: "Export Initiated",
      description: `Exporting "${selectedCollection}" as ${format}. This may take a moment.`,
    });
    console.log(`Exporting ${selectedCollection} as ${format}`);
    // In a real app, this would trigger a download or API request
  };

  // Mock collections for the dropdown
  const mockCollections = ["Project Alpha Documents", "Customer Feedback Q3", "Research Papers - AI Ethics", "All Data"];

  return (
    <Card className="shadow-lg">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl font-headline">Export Data</CardTitle>
        <Download className="h-6 w-6 text-accent" />
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">
          Export your collections or search results in various formats.
        </p>
        <div className="space-y-4">
          <div>
            <Label htmlFor="collection-select" className="mb-2 block">Select Collection for Export</Label>
            <Select onValueChange={setSelectedCollection} value={selectedCollection}>
              <SelectTrigger id="collection-select" className="w-full">
                <SelectValue placeholder="Choose a collection" />
              </SelectTrigger>
              <SelectContent>
                {mockCollections.map((collectionName) => (
                  <SelectItem key={collectionName} value={collectionName}>
                    {collectionName}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <Button variant="outline" onClick={() => handleExport("JSON")} disabled={!selectedCollection}>
              <FileJson className="mr-2 h-4 w-4" /> Export as JSON
            </Button>
            <Button variant="outline" onClick={() => handleExport("Markdown")} disabled={!selectedCollection}>
              <FileText className="mr-2 h-4 w-4" /> Export as Markdown
            </Button>
            <Button variant="outline" onClick={() => handleExport("CSV")} disabled={!selectedCollection}>
              <FileSpreadsheet className="mr-2 h-4 w-4" /> Export as CSV
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
