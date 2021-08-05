const AddVoter = ({ newVoter, setNewVoter, addNewVoter }) => {
	const handleNewVoter = (e) => {
		setNewVoter(e.target.value);
	};
	return (
		<div>
			<p>Give right to vote</p>
			<div
				style={{
					width: '15em',
					display: 'flex',
					justifyContent: 'space-between',
				}}>
				<input value={newVoter} onChange={handleNewVoter} />
				<button onClick={addNewVoter}>Give right</button>
			</div>
		</div>
	);
};

export default AddVoter;
