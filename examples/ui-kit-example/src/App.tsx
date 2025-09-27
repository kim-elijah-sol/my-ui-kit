import { Button } from '@ui-kit/ui';

const App = () => {
  return (
    <div
      css={{
        padding: 16,
      }}
    >
      <div>
        <p
          css={{
            marginBottom: '1rem',
            fontWeight: 600,
            fontSize: '1.25rem',
          }}
        >
          Button
        </p>
        <div
          css={{
            padding: 12,
            border: '1px solid #DDD',
            borderRadius: '0.75rem',
            display: 'flex',
            gap: '0.5rem',
            flexWrap: 'wrap',
          }}
        >
          <Button>Primary Button</Button>
          <Button variant='border'>Border Button</Button>
          <Button variant='dashed'>Dashed Button</Button>
          <Button variant='text'>Text Button</Button>
          <Button variant='link'>Link Button</Button>
        </div>
      </div>
    </div>
  );
};

export default App;
