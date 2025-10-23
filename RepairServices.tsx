import React from 'react';

function RepairServices() {
  return (
    <section style={{ textAlign: 'center', padding: '3rem 1rem', color: '#e5e5e5', background: '#111' }}>
      <h2 style={{ fontSize: '1.6rem', color: '#22d3ee' }}>Repair Services</h2>
      <p style={{ marginTop: '1rem', fontSize: '1rem' }}>
        Full-service diagnostics and maintenance for heavy-duty trucks.
      </p>
    </section>
  );
}

export default RepairServices;                    <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">Precision solutions for every need, from preventative maintenance to complete overhauls.</p>
                    <div className="w-24 h-1 bg-cyan-400 mx-auto mt-4"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <ServiceCard key={service.name} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
