const himpunan = (x, index, input, bobot) => {
  const ringan = 1.16,
    sedang = 1.75,
    parah = 2.33;
  let result = 0;
  if (x <= ringan) {
    result = +((x - 1.16) / (0 - 1.16)).toFixed(3);
    return {
      id: input.gejalaId,
      nama: input.nama,
      bobot,
      result,
      z: +(result * bobot).toFixed(3),
      keterangan: 'ringan',
      latex: `\\[a${+index + 1} = {${x} - 1.16 \\over 0 - 1.16} = ${result}\\]`,
    };
  } else if (x >= ringan && x <= sedang) {
    result = +((x - 1.16) / (1.75 - 1.16)).toFixed(3);
    return {
      id: input.gejalaId,
      nama: input.nama,
      bobot,
      result,
      z: +(result * bobot).toFixed(3),
      keterangan: 'sedang1',
      latex: `\\[a${+index + 1} = {${x} - 1.16 \\over 1.75 - 1.16} = ${result}\\]`,
    };
  } else if (x > sedang && x <= parah) {
    result = +((x - 2.33) / (1.75 - 2.33)).toFixed(3);
    return {
      id: input.gejalaId,
      nama: input.nama,
      bobot,
      result,
      z: +(result * bobot).toFixed(3),
      keterangan: 'sedang2',
      latex: `\\[a${+index + 1} = {${x} - 2.33 \\over 1.75 - 2.33} = ${result}\\]`,
    };
  } else {
    result = +((x - 2.33) / (3.5 - 2.33)).toFixed(3);
    return {
      id: input.gejalaId,
      nama: input.nama,
      bobot,
      result,
      z: +(result * bobot).toFixed(3),
      keterangan: 'parah',
      latex: `\\[a${+index + 1} = {${x} - 2.33 \\over 1.75 - 2.33} = ${result}\\]`,
    };
  }
};

module.exports = ({ listGejala, inputs }) => {
  const inputLength = inputs.length;
  let result;
  const tempHimpunan = [];
  const defuzzyfikasi = { a: 0, z: 0, latex: '', result: 0 };
  for (const key in listGejala) {
    if (Object.hasOwnProperty.call(listGejala, key)) {
      const gejala = listGejala[key];
      let count = 0;
      for (const e in inputs) {
        if (Object.hasOwnProperty.call(inputs, e)) {
          const input = inputs[e];
          const findListPenyakit = gejala.ListGejalas.find(e => e.gejalaId === input.gejalaId);
          if (findListPenyakit) {
            const calHimpunan = (findListPenyakit.bobot * input.bobot).toFixed(1);
            tempHimpunan.push(himpunan(calHimpunan, e, input, findListPenyakit.bobot));
            count += 1;
          }
        }
      }
      if (count === inputLength) {
        result = gejala;
        const lengthGejala = result.ListGejalas.length;
        const sumA = +tempHimpunan
          .map(item => +item.result)
          .reduce((prev, curr) => prev + curr, 0)
          .toFixed(3);
        const sumZ = +tempHimpunan
          .map(item => +item.z)
          .reduce((prev, curr) => prev + curr, 0)
          .toFixed(3);

        const sumAZ = +(sumA / sumZ).toFixed(3);

        defuzzyfikasi.a = sumA;
        defuzzyfikasi.z = sumZ;
        defuzzyfikasi.result = sumAZ;
        defuzzyfikasi.latex = `\\[Z = {${sumA} \\over ${sumZ}} = ${sumAZ}\\]`;

        const pAwal = +((sumAZ / lengthGejala) * 100).toFixed(2);
        const pAkhir = +((inputLength / lengthGejala) * pAwal).toFixed(2);

        return { result, himpunan: tempHimpunan, defuzzyfikasi, pAwal, pAkhir, lengthGejala, inputLength };
      }
      console.log({ count, inputLength });
    }
  }
  return false;
};
