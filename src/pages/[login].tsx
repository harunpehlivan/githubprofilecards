import { useRef } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { NextSeo } from 'next-seo';

// --- Interfaces ---
import { IUser } from '@interfaces/IUser';

// --- Hooks ---
import { useFetch } from '@hooks/useFetch';

// --- Chakra-UI---
import { Alert, AlertIcon, Spinner } from '@chakra-ui/react';

// --- Motion Components ---
import { MotionBox } from '@components/Motion/MotionBox';

// --- Components ---
const GoBackButtonComponent = dynamic(() => import('@components/GoBackButton'));
const UserComponent = dynamic(() => import('@components/User'));

// -- Animations --
import { slide } from '@animations';

const UserPage: NextPage = () => {
	const router = useRouter();
	const { login } = router.query;

	const constraintsRef = useRef(null);

	const { data, error } = useFetch<IUser>(login ? `users/${login}` : null);

	return (
		<>
			<NextSeo
				title={login && !error ? `👤 ${login}` : !error ? 'Loading...' : 'Not Found!'}
				description="Searching a GitHub profile..."
			/>

			<MotionBox
				w="full"
				h="100vh"
				initial="initial"
				animate="animate"
				exit="exit"
				variants={slide}
			>
				<GoBackButtonComponent pageRedirection="/" />

				<MotionBox
					w="full"
					h="full"
					display="grid"
					placeItems="center"
					ref={constraintsRef}
				>
					{error && (
						<Alert w="md" borderRadius="xl" status="error">
							<AlertIcon />
							Profile not found! Search another profile!
						</Alert>
					)}

					{!data && !error && <Spinner color="white" size="xl" />}

					{data && <UserComponent user={data} constraintsRef={constraintsRef} />}
				</MotionBox>
			</MotionBox>
		</>
	);
};

export default UserPage;
