// components/VocabComponent.tsx
// This component displays the user's vocabulary list in a clean table format.

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  
  // Mock vocabulary data
  const vocabList = [
    { id: 1, german: 'der Apfel', english: 'the apple', sentence: 'Ich esse einen Apfel.' },
    { id: 2, german: 'die Katze', english: 'the cat', sentence: 'Die Katze schläft.' },
    { id: 3, german: 'das Haus', english: 'the house', sentence: 'Das Haus ist groß.' },
    { id: 4, german: 'schnell', english: 'fast', sentence: 'Das Auto ist sehr schnell.' },
    { id: 5, german: 'lernen', english: 'to learn', sentence: 'Wir lernen Deutsch.' },
    { id: 6, german: 'Gemütlichkeit', english: 'coziness, warmth', sentence: 'Ich mag die Gemütlichkeit des Winters.' },
  ];
  
  export default function VocabComponent() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Vocabulary List</CardTitle>
          <CardDescription>Your saved words and phrases.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">German</TableHead>
                <TableHead>English</TableHead>
                <TableHead>Example Sentence</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {vocabList.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.german}</TableCell>
                  <TableCell>{item.english}</TableCell>
                  <TableCell>{item.sentence}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    );
  }
  