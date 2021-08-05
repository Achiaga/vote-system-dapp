const CheckAddressVoter = ({
	voterAddressToCheck,
	setVoterAddressToCheck,
	checkAddressVoter,
}) => {
	const handleNewAddressToCheckVote = (e) => {
		setVoterAddressToCheck(e.target.value);
	};
	return (
		<div>
			<p>Check if an address vote status</p>
			<div
				style={{
					width: '15em',
					display: 'flex',
					justifyContent: 'space-between',
				}}>
				<input
					value={voterAddressToCheck}
					onChange={handleNewAddressToCheckVote}
				/>
				<button onClick={checkAddressVoter}>Check</button>
			</div>
		</div>
	);
};

export default CheckAddressVoter;
