import { NextPage } from 'next';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { NextSeo } from 'next-seo';

// --- Chakra-UI ---
import { Center } from '@chakra-ui/react';

// --- Components ---
const SearchComponent = dynamic(() => import('@components/Search'));

// --- Motion Components ---
import { MotionContainer } from '@components/Motion/MotionContainer';

// -- Animations --
import { slide } from '@animations';

const HomePage: NextPage = () => {
	const router = useRouter();

	const handleSearchLogin = (login: string) => {
		login && router.push(`/${login.trim()}`, undefined, { shallow: true });
	};

	return (
		<>
			<NextSeo
				title="🔍 Search GitHub Profile..."
				description="This is a Next.js template"
			/>

			<MotionContainer
				w="full"
				h="100vh"
				initial="initial"
				animate="animate"
				exit="exit"
				variants={slide}
			>
				<Center w="full" h="full">
					<SearchComponent handleSearchLogin={handleSearchLogin} />
				</Center>
			</MotionContainer>
		</>
	);
};

export default HomePage;
