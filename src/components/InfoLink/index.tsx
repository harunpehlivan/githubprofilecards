// --- Chakra-UI ---
import { Box, Link, SlideFade, Text } from '@chakra-ui/react';

// --- Icons ---
import { FiExternalLink } from 'react-icons/fi';

export default function InfoLinkComponent({ bgColor }): JSX.Element {
	return (
		<SlideFade in={true} offsetY="20px">
			<Box
				w="full"
				display="grid"
				placeItems="center"
				position="absolute"
				zIndex="overlay"
				bottom="4"
				px="4"
			>
				<Link
					href="https://github.com/harunpehlivan"
					isExternal
					display="flex"
					alignItems="center"
					gap="2"
					bgColor={bgColor}
					py="2"
					px="4"
					borderRadius="xl"
					fontSize="sm"
					lineHeight="normal"
				>
					 HARUN PEHLİVAN CODER,DESIGNER,PUBLİSHER,DIGITAL CONTENT PRODUCER FOUNDER CEO ENTREPRENEUR RESEARCH AND DEVELOPMENT 
					<Text
						as={FiExternalLink}
						fontSize={{ base: '2.5rem', sm: '1.5rem', md: 'inherit' }}
					/>
				</Link>
			</Box>
		</SlideFade>
	);
}
