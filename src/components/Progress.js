function Progress({ i, quesNum, points, maxPossiblePoints, answer }) {
  return (
    <header className="progress">
      <progress max={quesNum} value={i + Number(answer !== null)} />
      <p>
        Question <strong>{i + 1}</strong> / {quesNum}
      </p>
      <p>
        <strong>{points}</strong>/ {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
