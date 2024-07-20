import './background.scss';

const Background = ({ language }) => {
  const languages = {
    english: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"],
    arabic: ["ف", "ش", "خ", "ق", "ض", "ى", "م", "ب", "ل", "ء", "ة"],
    hindi: ["अ", "इ", "उ", "न", "म", "स", "त", "ज", "ह", "ग", "व"],
  };

  

  const characters = languages[language] || [];

  return (
    <div>
      <div className="background-wrapper">
        <div className="box">
          {characters.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Background;
