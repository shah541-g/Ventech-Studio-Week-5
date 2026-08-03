const records = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,
  name: `Student ${index + 1}`,
  email: `student${index + 1}@example.com`,
  age: 18 + (index % 8),
  marks: Math.floor(Math.random() * 51) + 50, // 50-100
}));

const fetchRecords = (start, jump) => {
  if (start >= records.length) {
    return null;
  }
  let end = start + jump;
  if (end > records.length) {
    end = records.length;
  }

  return {
    "data": records.slice(start, end),
    "remaining": records.length - end,
    "end": end,
  };
};

const paginate = () => {
  let start = 0;
  const jump = 10;
  let pageCount = 1;
  let remaining;
  do {
    const result = fetchRecords(start, jump);
    remaining= result.remaining
    start = result.end
    console.log("=======================");
    console.log(`========FETCH ${pageCount}========`);
    console.log("=======================");
    console.log(result.data);
    pageCount+=1
  } while (remaining > 0);
};

paginate();
