import { useDispatch, useSelector } from "react-redux";
import { set_number } from "../actions/actions-types";

import { NUMBERS, LIGNES } from "../constantes/table";


const GameForm = () => {
  const { numbers } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const { value } = e.target.number;

    dispatch(set_number({ value }));
  };

  return (

        <form onSubmit={(e) => handleSubmit(e)}>
          <table>
            <tbody>
              {[...Array(Math.ceil(NUMBERS / LIGNES)).keys()].map((a, i) => (
                <tr key={a+''+i}>
                  {[...Array(LIGNES).keys()].map((b, i) => (
                    <td key={b+''+i}>
                      {numbers.includes(a * LIGNES + b + 1) && (
                        <>
                          <input
                            type="radio"
                            name="number"
                            value={a * LIGNES + b + 1}
                          />
                          <label htmlFor="number">{a * LIGNES + b + 1}</label>
                        </>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <button type="submit">Valider</button>
        </form>
  );
};

export default GameForm;
