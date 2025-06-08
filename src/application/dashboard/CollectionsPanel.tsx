//src\application\dashboard\CollectionsPanel.tsx

"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/radix/card/card";
import { List, Database } from "lucide-react";
import { Button } from "@/radix/button/button";
import { ScrollArea } from "@/radix/layout/scroll-area";
import { useState, useEffect } from "react";
import { Collection } from "@/lib/vector/ifc/collection";
import { mockCollections } from "@/data/mock/mockdata";

/**
 * CollectionsPanel Component:
 * Displays a list of ChromaDB collections with loading state 
 * and create new collection button.
 * @returns JSX Element
 */
export function CollectionsPanel() {

    const [collections, setCollections] = useState<Collection[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate API call
        setTimeout(() => {
            setCollections(mockCollections);
            setIsLoading(false);}, 1000);
    }, []);

    return (

        <Card className="shadow-lg">

            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-2xl font-headline">Collections</CardTitle>
                <Database className="h-6 w-6 text-accent" />
            </CardHeader>

            <CardContent>
                <p className="text-muted-foreground mb-4">
                    Manage and view your ChromaDB collections.
                </p>

                {isLoading ? (
                    <div className="space-y-2">
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="h-10 bg-muted/50 animate-pulse rounded-md" />
                        ))}
                    </div>
                ) :
                    (
                        <ScrollArea className="h-[200px] pr-4">
                            <ul className="space-y-2">
                                {collections.map((collection) => (
                                    <li
                                        key={collection.id}
                                        className="flex items-center justify-between p-3 bg-muted/30 hover:bg-muted/60 rounded-md transition-colors duration-150"
                                    >
                                        <div className="flex items-center gap-2">
                                            <List className="h-5 w-5 text-primary" />
                                            <span className="font-medium">{collection.name}</span>
                                        </div>
                                        <span className="text-sm text-muted-foreground">
                                            {collection.itemCount} items
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </ScrollArea>
                    )}

                <Button variant="outline" className="mt-4 w-full sm:w-auto">
                    <Database className="mr-2 h-4 w-4" /> Create New Collection
                </Button>

            </CardContent>

        </Card>
    );

} //end component
