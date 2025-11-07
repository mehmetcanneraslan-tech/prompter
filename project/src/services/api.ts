const BASE_URL = 'batu-pfslc.ondigitalocean.app';

export async function sendChatMessage(message: string): Promise<ChatResponse> {
  const res = await fetch(`${BASE_URL}/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message }),
  });

  if (!res.ok) {
    throw new Error(`Network response was not ok: ${res.status}`);
  }

  return res.json();
}

export async function submitContactForm<TInput, TResult = unknown>(formData: TInput): Promise<TResult> {
  const res = await fetch(`${BASE_URL}/contact/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });

  if (!res.ok) {
    throw new Error(`Contact submission failed: ${res.status}`);
  }

  return res.json();
}

export type ChatResponse = {
  response?: string;
  answer?: string;
  [key: string]: unknown;
};
