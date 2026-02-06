import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';

interface KubernetesCluster {
  id: string;
  name: string;
  state: 'Running' | 'Error' | 'Stopped';
  autoScaling: 'Enabled' | 'Disabled';
  clusterType: string;
  size: number;
  cpuCores: number;
  memory: number;
  kubernetesVersion: string;
  account: string;
  zone: string;
}

@Component({
  selector: 'app-kubernetes',
  imports: [CommonModule, MatIconModule, MatCheckboxModule],
  templateUrl: './kubernetes.html',
  styleUrl: './kubernetes.scss',
})
export class Kubernetes {
  clusters: KubernetesCluster[] = [
    {
      id: '1',
      name: 'test-k8s',
      state: 'Error',
      autoScaling: 'Disabled',
      clusterType: 'CloudManaged',
      size: 1,
      cpuCores: 4,
      memory: 8192,
      kubernetesVersion: '1.26.0',
      account: 'admin',
      zone: 'CS-SIM1 Adv Zone x86',
    },
  ];

  currentPage = 1;
  itemsPerPage = 20;

  get totalItems(): number {
    return this.clusters.length;
  }

  get startItem(): number {
    return (this.currentPage - 1) * this.itemsPerPage + 1;
  }

  get endItem(): number {
    return Math.min(this.currentPage * this.itemsPerPage, this.totalItems);
  }
}
