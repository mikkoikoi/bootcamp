import "./App.css";

const DataWargaInput = () => {
  return (
    <form>
      <label htmlFor="nik">NIK :</label>
      <input type="text" placeholder="Masukkan NIK" />
      <br />
      <label htmlFor="nama">NAMA :</label>
      <input type="text" placeholder="Masukkan Nama" />
      <br />
      <label htmlFor="umur">UMUR :</label>
      <input type="text" placeholder="Masukkan Umur" />
      <input type="submit" value="Submit" />
    </form>
  );
};
const RowTable = (props) => {
  return (
    <tr>
      <td>{props.nik}</td>
      <td>{props.nama}</td>
      <td>{props.umur}</td>
    </tr>
  );
};
const DataWarga = (props) => {
  return (
    <div>
      <table style={styles.tableStyles}>
        <thead>
          <tr>
            <td>NIK</td>
            <td>NAMA</td>
            <td>UMUR</td>
          </tr>
        </thead>
        <tbody>{props.children}</tbody>
      </table>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <DataWarga>
        <RowTable nik="8383" nama="Nayuta" umur="19" />
        <RowTable nik="2022" nama="Mikko" umur="20" />
      </DataWarga>
      <DataWargaInput />
    </div>
  );
}
const styles = {
  tableStyles: { border: "1px solid #9999", backgroundColor: "white" },
};

export default App;
