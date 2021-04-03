     {/* <FormControl className={classes.formControl}>
        <InputLabel>Season Year</InputLabel>
        <Select></Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Season Type</InputLabel>
        <Select></Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Player</InputLabel>
        <Select></Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Game Length</InputLabel>
        <Select></Select>
      </FormControl> */}


      useEffect(() => {
        fetch("http://localhost:5000/api").then((response) =>
          response.json().then((data) => {
            console.log(111, data)
            console.log(222, setStats(data))
          })
        );
      }, []);