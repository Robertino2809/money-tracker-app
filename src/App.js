import './App.css';

function App() {
  return (
    <main>
      <h1>€400<span>.00</span></h1>
      <form>
        <div className='basic'>
          <input type='text' placeholder={'+200 new samsung tv'} />
          <input type='datetime-local' />
        </div>
        <div className='description'>
          <input type='text' placeholder={'description'} />
        </div>
        <button type='submit'>Add new transaction</button>
      </form>
      <div className='transactions'>
        <div className='transaction'>
          <div className='left'>
            <div className='name'>Samsung TV</div>
            <div className='description'>It was time for new tv</div>
          </div>
          <div className='right'>
            <div className='price'>€ 500</div>
            <div className='datetime'>20-09-2023 15:45</div>
          </div>
        </div>
        <div className='transaction'>
          <div className='left'>
            <div className='name'>Samsung TV</div>
            <div className='description'>It was time for new tv</div>
          </div>
          <div className='right'>
            <div className='price'>€ 500</div>
            <div className='datetime'>20-09-2023 15:45</div>
          </div>
        </div>
        <div className='transaction'>
          <div className='left'>
            <div className='name'>Samsung TV</div>
            <div className='description'>It was time for new tv</div>
          </div>
          <div className='right'>
            <div className='price'>€ 500</div>
            <div className='datetime'>20-09-2023 15:45</div>
          </div>
        </div>
        <div className='transaction'>
          <div className='left'>
            <div className='name'>Samsung TV</div>
            <div className='description'>It was time for new tv</div>
          </div>
          <div className='right'>
            <div className='price'>€ 500</div>
            <div className='datetime'>20-09-2023 15:45</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
