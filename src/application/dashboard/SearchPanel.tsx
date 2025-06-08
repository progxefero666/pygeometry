//src\application\dashboard\SearchPanel.tsx

"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/radix/card/card";
import { Input } from "@/radix/form/input";
import { Button } from "@/radix/button/button";
import { Search, FileText } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/radix/form/select";
import { useState } from "react";
import { SearchResult } from "@/lib/vector/ifc/searchresult";
import { mockCollections, mockSearchResults } from "@/data/mock/mockdata";


export function SearchPanel() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCollection, setSelectedCollection] = useState<string | undefined>(undefined);
    const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
    const [isSearching, setIsSearching] = useState(false);

    const handleSearch = () => {
        if (!searchTerm.trim() || !selectedCollection) return;

        // Reset previous results and set searching state
        setIsSearching(true);
        setSearchResults([]);

        // Simulate API call
        setTimeout(() => {
            setSearchResults(mockSearchResults.
                filter(r => r.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    r.snippet.toLowerCase().includes(searchTerm.toLowerCase())));
            setIsSearching(false);
        }, 1500);
    };

    return (
        <Card className="shadow-lg">

            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-2xl font-headline">Search Database</CardTitle>
                <Search className="h-6 w-6 text-accent" />
            </CardHeader>

            <CardContent>
                <p className="text-muted-foreground mb-4">
                    Query your vector collections for relevant information.
                </p>
                <div className="space-y-4">

                    <Select onValueChange={setSelectedCollection} value={selectedCollection}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a collection to search" />
                        </SelectTrigger>
                        <SelectContent>
                            {mockCollections.map((collection) => (
                                <SelectItem key={collection.id} value={collection.id}>
                                    {collection.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    <div className="flex gap-2">
                        <Input
                            type="search"
                            placeholder="Enter search query..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="flex-grow"
                        />
                        <Button onClick={handleSearch} disabled={isSearching || !selectedCollection || !searchTerm.trim()}>
                            <Search className="mr-2 h-4 w-4" /> {isSearching ? "Searching..." : "Search"}
                        </Button>
                    </div>

                </div>

                {searchResults.length > 0 && (
                    <div className="mt-6">

                        <h3 className="text-lg font-semibold mb-2">Search Results:</h3>
                        <ul className="space-y-3">
                            {searchResults.map(result => (
                                <li key={result.id} className="p-3 bg-muted/30 rounded-md">
                                    <div className="flex items-center justify-between">
                                        <h4 className="font-medium text-primary flex items-center gap-1"><FileText size={16} /> {result.title}</h4>
                                        <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">Score: {result.score.toFixed(2)}</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-1">{result.snippet}</p>
                                </li>
                            ))}
                        </ul>

                    </div>
                )}

                {isSearching && searchResults.length === 0 && (
                    <div className="mt-6 text-center">
                        <p className="text-muted-foreground">Loading search results...</p>
                        <div className="mt-2 h-10 bg-muted/50 animate-pulse rounded-md w-full"></div>
                    </div>
                )}
                {!isSearching && searchTerm && searchResults.length === 0 && (
                    <div className="mt-6 text-center">
                        <p className="text-muted-foreground">No results found for "{searchTerm}" in "{selectedCollection}".</p>
                    </div>
                )}

            </CardContent>

        </Card>
    );

} //end component
