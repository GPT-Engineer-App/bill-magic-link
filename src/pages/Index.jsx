import React, { useState } from "react";
import { Container, VStack, Text, Input, Button, Image, Box, Link, IconButton, Textarea } from "@chakra-ui/react";
import { FaCalendarPlus } from "react-icons/fa";

const Index = () => {
  const [image, setImage] = useState(null);
  const [calendarLink, setCalendarLink] = useState("");

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        // Placeholder for image processing and URL generation
        setCalendarLink("https://calendar.google.com/calendar/r/eventedit?text=Bill+Due+Date&dates=20231010T090000Z/20231010T100000Z&details=Bill+details+here");
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Upload Your Bill</Text>
        <Input type="file" accept="image/*,application/pdf" onChange={handleFileUpload} />
        {image && <Image src={image} alt="Uploaded Bill" boxSize="300px" objectFit="cover" />}
        {calendarLink && (
          <Box textAlign="center">
            <Text fontSize="lg">Add to your Calendar:</Text>
            <Link href={calendarLink} isExternal>
              <IconButton aria-label="Add to Calendar" icon={<FaCalendarPlus />} size="lg" />
            </Link>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
